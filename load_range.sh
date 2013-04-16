#!/bin/sh

offset=$1
count=$2

x=0

echo loading from $(($offset)) to $((offset+count))

head -$(($count+$offset)) data.csv |python csv2json.py|  tail -$count | while read line 
do
  x=$((x+1))
  curl -X PUT \
    -H 'Content-Type: application/json' \
    http://127.0.0.1:10018/riak/CDC/$x --data-binary "$line"
  if echo $x | grep 000;then
    echo w: $(($offset)) to $((offset+count)) is up to $x
  fi


done

wait
date
echo Done
