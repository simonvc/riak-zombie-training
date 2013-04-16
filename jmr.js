{
    "inputs":"CDC",
    "query":[{"map":{"language":"javascript",
    "source":"function(riakObject) {


       

          function CalcDistanceBetween(lat1, lon1, lat2, lon2) {
              var R = 3958.7558657440545; 
              var dLat = toRad(lat2-lat1);
              var dLon = toRad(lon2-lon1); 
              var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
                      Math.sin(dLon/2) * Math.sin(dLon/2); 
              var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
              var d = R * c;
              return d;
          }

        function toRad(Value) {
            return Value * Math.PI / 180;
        }

       var j = Riak.mapValuesJson(riakObject);

       var lat2 = 33.799745;
       var lon2 = -84.327171;
       var lat1 = j[0].lat;
       var lon1 = j[0].longd.replace('rn', '');

       d = CalcDistanceBetween(lat1, lon1, lat2, lon2);

       if (d < 1) {
         return [[riakObject]];
       }
       else {
         return [];
       } 
          }"
        

}}]}
