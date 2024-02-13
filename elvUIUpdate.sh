#! /bin/bash

trap "rm ElvUI-*.zip" EXIT

# if $1
# Check args

# fi

# read -p "Continue (y/n)?" choice
# case "$choice" in 
#   y|Y ) echo "yes";;
#   n|N ) echo "no";;
#   * ) echo "invalid";;
# esac

cd /data1/Games/World-of-Warcraft/drive_c/Program\ Files\ \(x86\)/World\ of\ Warcraft/_retail_/Interface/AddOns/ElvUIUpdater/ &&
    exec deno run --allow-read --allow-write --allow-net --allow-run updateElvUI.ts

exit 0