#!/bin/sh

x=0

cat data.csv | while read line 
do
  x=$((x+1))

  echo $x
  curl -X PUT http://127.0.0.1:10018/riak/CDC/$x --data-binary "$line"

done
