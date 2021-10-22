"use strict";(self.webpackChunkskywire_manager=self.webpackChunkskywire_manager||[]).push([[48],{77048:function(e){e.exports=JSON.parse('{"common":{"save":"Save","cancel":"Cancel","downloaded":"Downloaded","uploaded":"Uploaded","loading-error":"There was an error getting the data. Retrying...","operation-error":"There was an error trying to complete the operation.","no-connection-error":"There is no internet connection or connection to the Hypervisor.","error":"Error:","refreshed":"Data refreshed.","options":"Options","logout":"Logout","logout-error":"Error logging out.","logout-confirmation":"Are you sure you want to log out?","time-in-ms":"{{ time }}ms","ok":"Ok","unknown":"Unknown","close":"Close"},"labeled-element":{"edit-label":"Edit label","remove-label":"Remove label","copy":"Copy","remove-label-confirmation":"Do you really want to remove the label?","unnamed-element":"Unnamed","unnamed-local-visor":"Local visor","local-element":"Local","tooltip":"Click to copy the entry or change the label","tooltip-with-text":"{{ text }} (Click to copy the entry or change the label)"},"labels":{"title":"Labels","info":"Labels you have entered to easily identify visors, transports and other elements, instead of having to read machine generated identifiers.","list-title":"Label list","label":"Label","id":"Element ID","type":"Type","delete-confirmation":"Are you sure you want to delete the label?","delete-selected-confirmation":"Are you sure you want to delete the selected labels?","delete":"Delete label","deleted":"Delete operation completed.","empty":"There aren\'t any saved labels.","empty-with-filter":"No label matches the selected filtering criteria.","filter-dialog":{"label":"The label must contain","id":"The id must contain","type":"The type must be","type-options":{"any":"Any","visor":"Visor","dmsg-server":"DMSG server","transport":"Transport"}}},"filters":{"filter-action":"Filter","press-to-remove":"(Press to remove the filters)","remove-confirmation":"Are you sure you want to remove the filters?"},"tables":{"title":"Order by","sorting-title":"Ordered by:","sort-by-value":"Value","sort-by-label":"Label","label":"(label)","inverted-order":"(inverted)"},"start":{"title":"Start"},"node":{"title":"Visor details","not-found":"Visor not found.","statuses":{"online":"Online","online-tooltip":"Visor is online.","partially-online":"Online with problems","partially-online-tooltip":"Visor is online but not all services are working. For more information, open the details page and check the \\"Health info\\" section.","offline":"Offline","offline-tooltip":"Visor is offline."},"details":{"node-info":{"title":"Visor Info","label":"Label:","public-key":"Public key:","port":"Port:","dmsg-server":"DMSG server:","ping":"Ping:","node-version":"Visor version:","time":{"title":"Time online:","seconds":"a few seconds","minute":"1 minute","minutes":"{{ time }} minutes","hour":"1 hour","hours":"{{ time }} hours","day":"1 day","days":"{{ time }} days","week":"1 week","weeks":"{{ time }} weeks"}},"node-health":{"title":"Health info","status":"Status:","transport-discovery":"Transport discovery:","route-finder":"Route finder:","setup-node":"Setup node:","uptime-tracker":"Uptime tracker:","address-resolver":"Address resolver:","element-offline":"Offline"},"node-traffic-data":"Traffic data"},"tabs":{"info":"Info","apps":"Apps","routing":"Routing"},"error-load":"An error occurred while refreshing the data. Retrying..."},"nodes":{"title":"Visor list","dmsg-title":"DMSG","update-all":"Update all visors","hypervisor":"Hypervisor","state":"State","state-tooltip":"Current state","label":"Label","key":"Key","dmsg-server":"DMSG server","ping":"Ping","hypervisor-info":"This visor is the current Hypervisor.","copy-key":"Copy key","copy-dmsg":"Copy DMSG server key","copy-data":"Copy data","view-node":"View visor","delete-node":"Remove visor","delete-all-offline":"Remove all offline visors","error-load":"An error occurred while refreshing the list. Retrying...","empty":"There aren\'t any visors connected to this hypervisor.","empty-with-filter":"No visor matches the selected filtering criteria.","delete-node-confirmation":"Are you sure you want to remove the visor from the list?","delete-all-offline-confirmation":"Are you sure you want to remove all offline visors from the list?","delete-all-filtered-offline-confirmation":"All offline visors satisfying the current filtering criteria will be removed from the list. Are you sure you want to continue?","deleted":"Visor removed.","deleted-singular":"1 offline visor removed.","deleted-plural":"{{ number }} offline visors removed.","no-visors-to-update":"There are no visors to update.","filter-dialog":{"online":"The visor must be","label":"The label must contain","key":"The public key must contain","dmsg":"The DMSG server key must contain","online-options":{"any":"Online or offline","online":"Online","offline":"Offline"}}},"edit-label":{"label":"Label","done":"Label saved.","label-removed-warning":"The label was removed."},"settings":{"title":"Settings","password":{"initial-config-help":"Use this option for setting the initial password. After a password has been set, it is not possible to use this option to modify it.","help":"Options for changing your password.","old-password":"Old password","new-password":"New password","repeat-password":"Repeat password","password-changed":"Password changed.","error-changing":"Error changing password.","initial-config":{"title":"Set initial password","password":"Password","repeat-password":"Repeat password","set-password":"Set password","done":"Password set. Please use it to access the system.","error":"Error. Please make sure you have not already set the password."},"errors":{"bad-old-password":"The provided old password is not correct.","old-password-required":"Old password is required.","new-password-error":"Password must be 6-64 characters long.","passwords-not-match":"Passwords do not match.","default-password":"Don\'t use the default password (1234)."}},"updater-config":{"open-link":"Show updater settings","open-confirmation":"The updater settings are for experienced users only. Are you sure you want to continue?","help":"Use this form for overriding the settings that will be used by the updater. All empty fields will be ignored. The settings will be used for all updating operations, no mater which element is being updated, so please be careful.","channel":"Channel","version":"Version","archive-url":"Archive URL","checksum-url":"Checksum URL","not-saved":"The changes have not been saved yet.","save":"Save changes","remove-settings":"Remove the settings","saved":"The custom settings have been saved.","removed":"The custom settings have been removed.","save-confirmation":"Are you sure you want to apply the custom settings?","remove-confirmation":"Are you sure you want to remove the custom settings?"},"change-password":"Change password","refresh-rate":"Refresh rate","refresh-rate-help":"Time the system waits to update the data automatically.","refresh-rate-confirmation":"Refresh rate changed.","seconds":"seconds"},"login":{"password":"Password","incorrect-password":"Incorrect password.","initial-config":"Configure initial launch"},"actions":{"menu":{"terminal":"Terminal","config":"Configuration","update":"Update","reboot":"Reboot"},"reboot":{"confirmation":"Are you sure you want to reboot the visor?","done":"The visor is restarting."},"terminal-options":{"full":"Full terminal","simple":"Simple terminal"},"terminal":{"title":"Terminal","input-start":"Skywire terminal for {{address}}","error":"Unexpected error while trying to execute the command."}},"update":{"title":"Update","error-title":"Error","processing":"Looking for updates...","no-update":"There is no update for the visor. The currently installed version is:","no-updates":"No new updates were found.","already-updating":"Some visors are already being updated:","update-available":"The following updates were found:","update-available-singular":"The following updates for 1 visor were found:","update-available-plural":"The following updates for {{ number }} visors were found:","update-available-additional-singular":"The following additional updates for 1 visor were found:","update-available-additional-plural":"The following additional updates for {{ number }} visors were found:","update-instructions":"Click the \'Install updates\' button to continue.","updating":"The update operation has been started, you can open this window again for checking the progress:","version-change":"From {{ currentVersion }} to {{ newVersion }}","selected-channel":"Selected channel:","downloaded-file-name-prefix":"Downloading: ","speed-prefix":"Speed: ","time-downloading-prefix":"Time downloading: ","time-left-prefix":"Aprox. time left: ","starting":"Preparing to update","finished":"Status connection finished","install":"Install updates"},"apps":{"log":{"title":"Log","empty":"There are no log messages for the selected time range.","filter-button":"Only showing logs generated since:","filter":{"title":"Filter","filter":"Only show logs generated since","7-days":"The last 7 days","1-month":"The last 30 days","3-months":"The last 3 months","6-months":"The last 6 months","1-year":"The last year","all":"Show all"}},"apps-list":{"title":"Applications","list-title":"Application list","app-name":"Name","port":"Port","state":"State","state-tooltip":"Current state","auto-start":"Auto start","empty":"Visor doesn\'t have any applications.","empty-with-filter":"No app matches the selected filtering criteria.","disable-autostart":"Disable autostart","enable-autostart":"Enable autostart","autostart-disabled":"Autostart disabled","autostart-enabled":"Autostart enabled","unavailable-logs-error":"Unable to show the logs while the app is not running.","filter-dialog":{"state":"The state must be","name":"The name must contain","port":"The port must contain","autostart":"The autostart must be","state-options":{"any":"Running or stopped","running":"Running","stopped":"Stopped"},"autostart-options":{"any":"Enabled or disabled","enabled":"Enabled","disabled":"Disabled"}}},"vpn-socks-server-settings":{"socks-title":"Skysocks Settings","vpn-title":"VPN-Server Settings","new-password":"New password (Leave empty to remove the password)","repeat-password":"Repeat password","passwords-not-match":"Passwords do not match.","secure-mode-check":"Use secure mode","secure-mode-info":"When active, the server doesn\'t allow client/server SSH and doesn\'t allow any traffic from VPN clients to the server local network.","save":"Save","remove-passowrd-confirmation":"You left the password field empty. Are you sure you want to remove the password?","change-passowrd-confirmation":"Are you sure you want to change the password?","changes-made":"The changes have been made."},"vpn-socks-client-settings":{"socks-title":"Skysocks-Client Settings","vpn-title":"VPN-Client Settings","discovery-tab":"Search","remote-visor-tab":"Enter manually","history-tab":"History","settings-tab":"Settings","use":"Use this data","change-note":"Change note","remove-entry":"Remove entry","note":"Note:","note-entered-manually":"Entered manually","note-obtained":"Obtained from the discovery service","key":"Key:","port":"Port:","location":"Location:","state-available":"Available","state-offline":"Offline","public-key":"Remote visor public key","password":"Password","password-history-warning":"Note: the password will not be saved in the history.","copy-pk-info":"Copy public key.","copied-pk-info":"The public key has been copied.","copy-pk-error":"There was a problem copying the public key.","no-elements":"Currently there are no elements to show. Please try again later.","no-elements-for-filters":"There are no elements that meet the filter criteria.","no-filter":"No filter has been selected","click-to-change":"Click to change","remote-key-length-error":"The public key must be 66 characters long.","remote-key-chars-error":"The public key must only contain hexadecimal characters.","save":"Save","remove-from-history-confirmation":"Are you sure you want to remove the entry from the history?","change-key-confirmation":"Are you sure you want to change the remote visor public key?","changes-made":"The changes have been made.","no-history":"This tab will show the last {{ number }} public keys used.","default-note-warning":"The default note has been used.","pagination-info":"{{ currentElementsRange }} of {{ totalElements }}","killswitch-check":"Activate killswitch","killswitch-info":"When active, all network connections will be disabled if the app is running but the VPN protection is interrupted (for temporary errors or any other problem).","settings-changed-alert":" The changes have not been saved yet.","save-settings":"Save settings","change-note-dialog":{"title":"Change Note","note":"Note"},"password-dialog":{"title":"Enter Password","password":"Password","info":"You are being asked for a password because a password was set when the selected entry was created, but the it was not saved for security reasons. You can leave the password empty if needed.","continue-button":"Continue"},"filter-dialog":{"title":"Filters","country":"The country must be","any-country":"Any","location":"The location must contain","pub-key":"The public key must contain","apply":"Apply"}},"stop-app":"Stop","start-app":"Start","view-logs":"View logs","settings":"Settings","error":"An error has occured and it was not possible to perform the operation.","stop-confirmation":"Are you sure you want to stop the app?","stop-selected-confirmation":"Are you sure you want to stop the selected apps?","disable-autostart-confirmation":"Are you sure you want to disable autostart for the app?","enable-autostart-confirmation":"Are you sure you want to enable autostart for the app?","disable-autostart-selected-confirmation":"Are you sure you want to disable autostart for the selected apps?","enable-autostart-selected-confirmation":"Are you sure you want to enable autostart for the selected apps?","operation-completed":"Operation completed.","operation-unnecessary":"The selection already has the requested setting.","status-running":"Running","status-stopped":"Stopped","status-failed":"Failed","status-running-tooltip":"App is currently running","status-stopped-tooltip":"App is currently stopped","status-failed-tooltip":"Something went wrong. Check the app\'s messages for more information"},"transports":{"title":"Transports","remove-all-offline":"Remove all offline transports","remove-all-offline-confirmation":"Are you sure you want to remove all offline transports?","remove-all-filtered-offline-confirmation":"All offline transports satisfying the current filtering criteria will be removed. Are you sure you want to continue?","info":"Connections you have with remote Skywire visors, to allow local Skywire apps to communicate with apps running on those remote visors.","list-title":"Transport list","state":"State","state-tooltip":"Current state","id":"ID","remote-node":"Remote","type":"Type","create":"Create transport","delete-confirmation":"Are you sure you want to delete the transport?","delete-selected-confirmation":"Are you sure you want to delete the selected transports?","delete":"Delete transport","deleted":"Delete operation completed.","empty":"Visor doesn\'t have any transports.","empty-with-filter":"No transport matches the selected filtering criteria.","statuses":{"online":"Online","online-tooltip":"Transport is online","offline":"Offline","offline-tooltip":"Transport is offline"},"details":{"title":"Details","basic":{"title":"Basic info","state":"State:","id":"ID:","local-pk":"Local public key:","remote-pk":"Remote public key:","type":"Type:"},"data":{"title":"Data transmission","uploaded":"Uploaded data:","downloaded":"Downloaded data:"}},"dialog":{"remote-key":"Remote public key","label":"Identification name (optional)","transport-type":"Transport type","success":"Transport created.","success-without-label":"The transport was created, but it was not possible to save the label.","errors":{"remote-key-length-error":"The remote public key must be 66 characters long.","remote-key-chars-error":"The remote public key must only contain hexadecimal characters.","transport-type-error":"The transport type is required."}},"filter-dialog":{"online":"The transport must be","id":"The id must contain","remote-node":"The remote key must contain","online-options":{"any":"Online or offline","online":"Online","offline":"Offline"}}},"routes":{"title":"Routes","info":"Paths used to reach the remote visors to which transports have been established. Routes are automatically generated as needed.","list-title":"Route list","key":"Key","type":"Type","source":"Source","destination":"Destination","delete-confirmation":"Are you sure you want to delete the route?","delete-selected-confirmation":"Are you sure you want to delete the selected routes?","delete":"Delete route","deleted":"Delete operation completed.","empty":"Visor doesn\'t have any routes.","empty-with-filter":"No route matches the selected filtering criteria.","details":{"title":"Details","basic":{"title":"Basic info","key":"Key:","rule":"Rule:"},"summary":{"title":"Rule summary","keep-alive":"Keep alive:","type":"Rule type:","key-route-id":"Key route ID:"},"specific-fields-titles":{"app":"App fields","forward":"Forward fields","intermediary-forward":"Intermediary forward fields"},"specific-fields":{"route-id":"Next route ID:","transport-id":"Next transport ID:","destination-pk":"Destination public key:","source-pk":"Source public key:","destination-port":"Destination port:","source-port":"Source port:"}},"filter-dialog":{"key":"The key must contain","type":"The type must be","source":"The source must contain","destination":"The destination must contain","any-type-option":"Any"}},"copy":{"tooltip":"Click to copy","tooltip-with-text":"{{ text }} (Click to copy)","copied":"Copied!"},"selection":{"select-all":"Select all","unselect-all":"Unselect all","delete-all":"Delete all selected elements","start-all":"Start all selected apps","stop-all":"Stop all selected apps","enable-autostart-all":"Enable autostart for all selected apps","disable-autostart-all":"Disable autostart for all selected apps"},"refresh-button":{"seconds":"Updated a few seconds ago","minute":"Updated 1 minute ago","minutes":"Updated {{ time }} minutes ago","hour":"Updated 1 hour ago","hours":"Updated {{ time }} hours ago","day":"Updated 1 day ago","days":"Updated {{ time }} days ago","week":"Updated 1 week ago","weeks":"Updated {{ time }} weeks ago","error-tooltip":"There was an error updating the data. Retrying automatically every {{ time }} seconds..."},"view-all-link":{"label":"View all {{ number }} elements"},"paginator":{"first":"First","last":"Last","total":"Total: {{ number }} pages","select-page-title":"Select page"},"confirmation":{"header-text":"Confirmation","confirm-button":"Yes","cancel-button":"No","close":"Close","error-header-text":"Error","done-header-text":"Done"},"language":{"title":"Select language"},"tabs-window":{"title":"Change tab"}}')}}]);