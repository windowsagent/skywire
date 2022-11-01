//go:build darwin
// +build darwin

package skyenv

import (
	"runtime"

	"github.com/google/uuid"
	"github.com/jaypipes/ghw"

	"github.com/skycoin/skywire-utilities/pkg/cipher"
)

const (
	//OS detection at runtime
	OS = "mac"
	// SkywirePath is the path to the installation folder.
	SkywirePath = "/Library/Application Support/Skywire"
	// ConfigJSON is the config name generated by the script included with the installation on mac
	ConfigJSON = ConfigName
)

// PackageConfig contains installation paths (for mac)
func PackageConfig() PkgConfig {
	pkgConfig := PkgConfig{
		Launcher: Launcher{
			BinPath: "/Applications/Skywire.app/Contents/MacOS/apps",
		},
		LocalPath: "/Library/Application Support/Skywire/local",
		Hypervisor: Hypervisor{
			DbPath:     "/Library/Application Support/Skywire/users.db",
			EnableAuth: true,
		},
	}
	return pkgConfig
}

// UserConfig contains installation paths (for mac)
func UserConfig() PkgConfig {
	usrConfig := PkgConfig{
		Launcher: Launcher{
			BinPath: "/Applications/Skywire.app/Contents/MacOS/apps",
		},
		LocalPath: HomePath() + "/.skywire/local",
		Hypervisor: Hypervisor{
			DbPath:     HomePath() + "/.skywire/users.db",
			EnableAuth: true,
		},
	}
	return usrConfig
}

// UpdateCommand returns the commands which are run when the update button is clicked in the ui
func UpdateCommand() []string {
	return []string{`echo "update not implemented for macOS. Download a new version from the release section here: https://github.com/skycoin/skywire/releases"`}
}

// Survey system hardware survey struct
type Survey struct {
	PubKey         cipher.PubKey    `json:"public_key,omitempty"`
	SkycoinAddress string           `json:"skycoin_address,omitempty"`
	GOOS           string           `json:"go_os,omitempty"`
	GOARCH         string           `json:"go_arch,omitempty"`
	IPInfo         *IPSkycoin       `json:"ip.skycoin.com,omitempty"`
	IPAddr         *IPAddr          `json:"ip_addr,omitempty"`
	Disks          *ghw.BlockInfo   `json:"ghw_blockinfo,omitempty"`
	Product        *ghw.ProductInfo `json:"ghw_productinfo,omitempty"`
	Memory         *ghw.MemoryInfo  `json:"ghw_memoryinfo,omitempty"`
	UUID           uuid.UUID        `json:"uuid,omitempty"`
	SkywireVersion string           `json:"skywire_version,omitempty"`
}

// SystemSurvey returns system survey
func SystemSurvey() (Survey, error) {
	disks, err := ghw.Block()
	if err != nil {
		return Survey{}, err
	}
	product, err := ghw.Product()
	if err != nil {
		return Survey{}, err
	}
	memory, err := ghw.Memory()
	if err != nil {
		return Survey{}, err
	}
	s := Survey{
		IPInfo:         IPSkycoinFetch(),
		IPAddr:         IPA(),
		GOOS:           runtime.GOOS,
		GOARCH:         runtime.GOARCH,
		UUID:           uuid.New(),
		Disks:          disks,
		Product:        product,
		Memory:         memory,
		SkywireVersion: Version(),
	}
	return s, nil
}
