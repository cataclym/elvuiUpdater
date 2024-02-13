#! /bin/bash

RED='\033[0;31m'

addon_dir=_retail_/Interface/AddOns/

if [ -z "$1" ] ||  [ ! -d "$1" ]; then
    echo -e "${RED}""    "Missing WoW folder argument!""
    exit 1
fi

full_path="$1$addon_dir"

exec deno run --allow-read --allow-write --allow-net --allow-run /opt/ElvUIUpdater/updateElvUI.ts "$full_path"

exit 0