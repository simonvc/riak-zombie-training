{
    "inputs":"CDC",
    "query":[{"map":{"language":"javascript",
    "source":"function(riakObject) {
       var j = Riak.mapValuesJson(riakObject);

       var lat2 = 33.799745;
       var lon2 = -84.327171;
       var lat1 = j.lat;
       var lon1 = j.longd;
       
        var R = 6371; 
        var x1 = lat2 - lat1;
        var dLat = ( x1 * Math.PI / 180);
        var x2 = lon2 - lon1;
        var dLon = ( x2 * Math.PI / 180);


        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;

       if (d < 5000) {
         return [[riakObject.key]];
       }
       else {
         return [];
       } 
          }"
        

}}]}
