// Package message contains the code required by the chat app
package message

import (
	"encoding/json"
	"time"

	"github.com/skycoin/skywire-utilities/pkg/cipher"
)

//types of messages
const (
	ErrMsgType  = iota
	ConnMsgType //used to handle connections
	TxtMsgType  //the txt peers send to each other or within groups
	InfoMsgType //used to send and ask for info like what type of chat is the pk (group/peer), get all msgs, member infos etc.
	CmdMsgType  //used to control a server (e.g. send ban-peer or delete-msg commands)
)

//subtypes of connMsgType
const (
	ErrConnMsg = iota
	ConnMsgTypeRequest
	ConnMsgTypeAccept
	ConnMsgTypeReject
)

//types of messageStatus
const (
	MsgStatusInitial = iota
	MsgStatusSent
	MsgStatusReceived
)

// Message defines a message
type Message struct {
	ID         int64         //an identifier for p2p chats and groups, Id is set by the receiver/server
	Origin     cipher.PubKey //the originator of the Message
	Time       time.Time     //the utc+0 timestamp of the Message
	Sender     cipher.PubKey //from who the Message was received (e.g. peer/group)
	Msgtype    int           //see const above
	MsgSubtype int           //see consts above
	Message    []byte        //the actual Message
	Status     int           //"Sent" or "Received"
	Seen       bool          //flag to save whether the Message was read or not by the receiver (only for local notifications) -> online feedback will be implemented in future versions
}

// JSONMessage defines a json message
type JSONMessage struct {
	ID         int64         `json:"Id"`
	Origin     cipher.PubKey `json:"Origin"`
	Time       time.Time     `json:"Time"`
	Sender     cipher.PubKey `json:"Sender"`
	Msgtype    int           `json:"Msgtype"`
	MsgSubtype int           `json:"MsgSubtype"`
	Message    string        `json:"Message"`
	Status     int           `json:"Status"`
	Seen       bool          `json:"Seen"`
}

// NewJSONMessage return a JSONMessage from a message
func NewJSONMessage(m Message) JSONMessage {
	return JSONMessage{
		m.ID,
		m.Origin,
		m.Time,
		m.Sender,
		m.Msgtype,
		m.MsgSubtype,
		string(m.Message),
		m.Status,
		m.Seen,
	}
}

// NewMessage returns a message from a JSONMessage
func NewMessage(m JSONMessage) Message {
	return Message{
		m.ID,
		m.Origin,
		m.Time,
		m.Sender,
		m.Msgtype,
		m.MsgSubtype,
		[]byte(m.Message),
		m.Status,
		m.Seen,
	}
}

// MarshalJSON returns marshaled json message and error
func (m Message) MarshalJSON() ([]byte, error) {
	return json.Marshal(NewJSONMessage(m))
}

// NewTextMessage returns a Message
func NewTextMessage(pk cipher.PubKey, msg []byte) Message {
	m := Message{}
	m.Origin = pk
	m.Sender = pk
	m.Msgtype = TxtMsgType
	m.MsgSubtype = 0
	m.Message = msg
	m.Status = MsgStatusInitial
	m.Time = time.Now()
	return m
}

// NewChatRequestMessage returns a request Message
func NewChatRequestMessage(pk cipher.PubKey) Message {
	m := Message{}
	m.Origin = pk
	m.Sender = pk
	m.Msgtype = ConnMsgType
	m.MsgSubtype = ConnMsgTypeRequest
	m.Status = MsgStatusInitial
	m.Time = time.Now()
	return m
}

// NewChatAcceptMessage returns a chat accepted message
func NewChatAcceptMessage(pk cipher.PubKey) Message {
	m := Message{}
	m.Origin = pk
	m.Sender = pk
	m.Msgtype = ConnMsgType
	m.MsgSubtype = ConnMsgTypeAccept
	m.Status = MsgStatusInitial
	m.Time = time.Now()
	return m
}

// NewChatRejectMessage returns new chat rejected message
func NewChatRejectMessage(pk cipher.PubKey) Message {
	m := Message{}
	m.Origin = pk
	m.Sender = pk
	m.Msgtype = ConnMsgType
	m.MsgSubtype = ConnMsgTypeReject
	m.Status = MsgStatusInitial
	m.Time = time.Now()
	return m
}

// NewChatInfoMessage returns new chat info
func NewChatInfoMessage(pk cipher.PubKey, info []byte) Message {
	m := Message{}
	m.Origin = pk
	m.Sender = pk
	m.Msgtype = InfoMsgType
	m.Message = info
	m.Status = MsgStatusInitial
	m.Time = time.Now()
	return m
}

// GetID returns message ID
func (m *Message) GetID() int64 {
	return m.ID
}

// GetOrigin returns origin public key
func (m *Message) GetOrigin() cipher.PubKey {
	return m.Origin
}

// GetTime returns time.Time of the message
func (m *Message) GetTime() time.Time {
	return m.Time
}

// GetSender returns the sender public key
func (m *Message) GetSender() cipher.PubKey {
	return m.Sender
}

// GetMessageType returns the message type integer
func (m *Message) GetMessageType() int {
	return m.Msgtype
}

// GetMessage returns the message in bytes
func (m *Message) GetMessage() []byte {
	return m.Message
}

// GetStatus returns the message status int
func (m *Message) GetStatus() int {
	return m.Status
}

// GetSeen returns the read status of the message
func (m *Message) GetSeen() bool {
	return m.Seen
}

// SetStatus sets the message status
func (m *Message) SetStatus(status int) {
	m.Status = status
}