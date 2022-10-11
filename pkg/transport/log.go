package transport

import (
	"bytes"
	"encoding/gob"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strconv"
	"sync"
	"sync/atomic"
	"time"

	"github.com/gocarina/gocsv"
	"github.com/google/uuid"

	"github.com/skycoin/skywire-utilities/pkg/logging"
)

// CsvEntry represents a logging entry for csv for a given Transport.
type CsvEntry struct {
	TpID uuid.UUID `csv:"tp_id"`
	// atomic requires 64-bit alignment for struct field access
	LogEntry
	TimeStamp int64 `csv:"time_stamp"` // TimeStamp should be time.RFC3339Nano formatted
}

// LogEntry represents a logging entry for a given Transport.
// The entry is updated every time a packet is received or sent.
type LogEntry struct {
	// atomic requires 64-bit alignment for struct field access
	RecvBytes uint64 `csv:"recv"` // Total received bytes.
	SentBytes uint64 `csv:"sent"` // Total sent bytes.
}

// AddRecv records read.
func (le *LogEntry) AddRecv(n uint64) {
	atomic.AddUint64(&le.RecvBytes, n)
}

// AddSent records write.
func (le *LogEntry) AddSent(n uint64) {
	atomic.AddUint64(&le.SentBytes, n)
}

// MarshalJSON implements json.Marshaller
func (le *LogEntry) MarshalJSON() ([]byte, error) {
	rb := strconv.FormatUint(atomic.LoadUint64(&le.RecvBytes), 10)
	sb := strconv.FormatUint(atomic.LoadUint64(&le.SentBytes), 10)
	return []byte(`{"recv":` + rb + `,"sent":` + sb + `}`), nil
}

// GobEncode implements gob.GobEncoder
func (le *LogEntry) GobEncode() ([]byte, error) {
	var b bytes.Buffer
	enc := gob.NewEncoder(&b)
	if err := enc.Encode(le.RecvBytes); err != nil {
		return nil, err
	}
	if err := enc.Encode(le.SentBytes); err != nil {
		return nil, err
	}
	return b.Bytes(), nil
}

// GobDecode implements gob.GobDecoder
func (le *LogEntry) GobDecode(b []byte) error {
	r := bytes.NewReader(b)
	dec := gob.NewDecoder(r)
	var rb uint64
	if err := dec.Decode(&rb); err != nil {
		return err
	}
	var sb uint64
	if err := dec.Decode(&sb); err != nil {
		return err
	}
	atomic.StoreUint64(&le.RecvBytes, rb)
	atomic.StoreUint64(&le.SentBytes, sb)
	return nil
}

// LogStore stores transport log entries.
type LogStore interface {
	Entry(id uuid.UUID) (*LogEntry, error)
	Record(id uuid.UUID, entry *LogEntry) error
}

type inMemoryTransportLogStore struct {
	entries map[uuid.UUID]*LogEntry
	mu      sync.Mutex
}

// InMemoryTransportLogStore implements in-memory TransportLogStore.
func InMemoryTransportLogStore() LogStore {
	return &inMemoryTransportLogStore{
		entries: make(map[uuid.UUID]*LogEntry),
	}
}

func (tls *inMemoryTransportLogStore) Entry(id uuid.UUID) (*LogEntry, error) {
	tls.mu.Lock()
	entry, ok := tls.entries[id]
	tls.mu.Unlock()
	if !ok {
		return entry, errors.New("transport log entry not found")
	}

	return entry, nil
}

func (tls *inMemoryTransportLogStore) Record(id uuid.UUID, entry *LogEntry) error {
	tls.mu.Lock()
	if tls.entries == nil {
		tls.entries = make(map[uuid.UUID]*LogEntry)
	}
	tls.entries[id] = entry
	tls.mu.Unlock()
	return nil
}

type fileTransportLogStore struct {
	dir string
	log *logging.Logger
	mu  sync.Mutex
}

// FileTransportLogStore implements file TransportLogStore.
func FileTransportLogStore(dir string) (LogStore, error) {
	if err := os.MkdirAll(dir, 0644); err != nil {
		return nil, err
	}
	log := logging.MustGetLogger("transport")
	return &fileTransportLogStore{
		dir: dir,
		log: log,
	}, nil
}

func (tls *fileTransportLogStore) Entry(tpID uuid.UUID) (*LogEntry, error) {
	tls.mu.Lock()
	defer tls.mu.Unlock()
	entries, err := tls.readFromCSV(tls.todayFileName())
	if err != nil {
		return nil, err
	}
	for _, entry := range entries {
		if entry.TpID == tpID {
			return &entry.LogEntry, nil
		}
	}
	return nil, nil
}

func (tls *fileTransportLogStore) Record(id uuid.UUID, entry *LogEntry) error {
	tls.mu.Lock()
	defer tls.mu.Unlock()
	cEntry := &CsvEntry{
		TpID:      id,
		LogEntry:  *entry,
		TimeStamp: time.Now().UTC().Unix(),
	}

	return tls.writeToCSV(cEntry)
}

func (tls *fileTransportLogStore) writeToCSV(cEntry *CsvEntry) error {
	f, err := os.OpenFile(filepath.Join(tls.dir, fmt.Sprint(tls.todayFileName())), os.O_RDWR|os.O_CREATE, 0644) //nolint
	if err != nil {
		return err
	}

	defer func() {
		if err := f.Close(); err != nil {
			tls.log.WithError(err).Errorln("Failed to close csv file")
		}
	}()

	readClients := []*CsvEntry{}
	writeClients := []*CsvEntry{}

	if err := gocsv.UnmarshalFile(f, &readClients); err != nil && !errors.Is(err, gocsv.ErrEmptyCSVFile) { // Load clients from file
		return err
	}

	var update bool
	for _, client := range readClients {
		// update if readClients contains the cEntry
		if client.TpID == cEntry.TpID {
			writeClients = append(writeClients, cEntry)
			update = true
			continue
		}
		writeClients = append(writeClients, client)
	}

	// write when the readClients are does not contain cEntry
	if !update {
		writeClients = append(writeClients, cEntry)
	}

	if _, err := f.Seek(0, 0); err != nil { // Go to the start of the file
		return err
	}

	err = gocsv.MarshalFile(&writeClients, f) // Use this to save the CSV back to the file
	if err != nil {
		return err
	}
	return nil
}

func (tls *fileTransportLogStore) readFromCSV(fileName string) ([]*CsvEntry, error) {
	f, err := os.OpenFile(filepath.Join(tls.dir, fmt.Sprint(fileName)), os.O_RDWR|os.O_CREATE, 0644) //nolint
	if err != nil {
		return nil, err
	}

	defer func() {
		if err := f.Close(); err != nil {
			tls.log.WithError(err).Errorln("Failed to close csv file")
		}
	}()

	readClients := []*CsvEntry{}

	if err := gocsv.UnmarshalFile(f, &readClients); err != nil && !errors.Is(err, gocsv.ErrEmptyCSVFile) { // Load clients from file
		return nil, err
	}
	return readClients, nil
}

func (tls *fileTransportLogStore) todayFileName() string {
	return fmt.Sprintf("%s.csv", time.Now().UTC().Format("2006-01-02"))
}
