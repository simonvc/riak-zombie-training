#!/bin/sh
curl -v -XPUT http://127.0.0.1:10018/riak/cdc \
    -H "Content-Type: application/json" \
      -d '{"props":{"w_val":1}}'
date
for worker in {0..9}; do
  ./load_range.sh $(($worker*100000)) 100000 &
done
wait
date
