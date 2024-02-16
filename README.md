## ElvUIUpdater 
A tool for updating ElvUI addon for WoW, on Linux systems

### Install
        
##### Download

    curl https://github.com/cataclym/elvuiUpdater/archive/refs/tags/v1.0.0.tar.gz -Lo ElvUIUpdater.tar.gz

##### Extract to /opt/ElvUIUpdater and symlink to /bin/elvuiupdate

    sudo tar xvzf ./ElvUIUpdater.tar.gz -C /opt/ElvUIUpdater && sudo ln -s /opt/ElvUIUpdater/elvUIUpdate.sh /bin/elvuiupdate

### How to use

    elvuiupdate /location/where/your/World\ Of\ Warcraft/folder/is

#### Example

    elvuiupdate /data1/Games/World-of-Warcraft/drive_c/Program\ Files\ \(x86\)/World\ of\ Warcraft/

    Archive:  ElvUI-13.58.zip
        extracting: /data1/Games/World-of-Warcraft/drive_c/Program Files (x86)/World of Warcraft/_retail_/Interface/AddOns/ElvUI/Classic/Filters/Load_Filters.xml  
        inflating: /data1/Games/World-of-Warcraft/drive_c/Program Files (x86)/World of Warcraft/_retail_/Interface/AddOns/ElvUI/Classic/Filters/Filters.lua  
        inflating: /data1/Games/World-of-Warcraft/drive_c/Program Files (x86)/World of Warcraft/_retail_/Interface/AddOns/ElvUI/Classic/Load.xml  
        inflating: /data1/Games/World-of-Warcraft/drive_c/Program Files (x86)/World of Warcraft/_retail_/Interface/AddOns/ElvUI/Classic/Modules/DataTexts/Load_DataTexts.xml  
        inflating: /data1/Games/World-of-Warcraft/drive_c/Program Files (x86)/World of Warcraft/_retail_/Interface/AddOns/ElvUI/Classic/Modules/Blizzard/Load_Blizzard.xml...
        ...  


###### Todo
* Check up to date
* Save directory location
* Support other platforms
