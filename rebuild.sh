#!/bin/sh
echo "Restarting front STARTED"
cd ../../
cd var/www/fe-b2bdiscount
git fetch
git reset --hard origin/dev
pm2 restart ecosystem.config.js
cd ~
echo "Restarting front ENDED"
