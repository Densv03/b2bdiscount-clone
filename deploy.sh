#!/bin/bash

echo -n "Enter flag (dev/staging): "
read flag

echo -n "Build admin app (true/false): "
read buildAdmin

if [ "$flag" == "dev" ]; then
    user="discount"
    host="159.89.4.114"
    password="b2bdiscount"
elif [ "$flag" == "staging" ]; then
    user="root"
    host="159.223.19.125"
    password="GNEBN7QEAh9OFt"
else
    echo "Invalid flag"
    exit 1
fi

if [ "$buildAdmin" == "true" ]; then
    npm run build:ssr && npm run build:admin && git add . && git commit -m "BUILD. $flag" && git push
else
    npm run build:ssr && git add . && git commit -m "BUILD. $flag" && git push
fi

sshpass -p $password ssh -o StrictHostKeyChecking=no $user@$host 'sh build-fe.sh'
