{
    "inputs":"CDC",
    "query":[{"map":{"language":"javascript",
    "source":"function(riakObject) {
       var j = Riak.mapValuesJson(riakObject);

       var d = 4;
       if (d < 5) {
         return [[riakObject.key]];
       }
       else {
         return [];
       } 
          }"
        

}}]}
