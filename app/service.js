angular.module("routing").service("service", function($q, $http){
  var user = {
    name: "Daniel"
  };

  this.getSongs = function(artist){
    var dfd = $q.defer();
    $http({
      method: "JSONP",
      url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
    }).then(function(data){
      dfd.resolve(data.data.results);
    });
    return dfd.promise;
  };


  this.getWeather = function(lat, lon){
    console.log(lat, lon);
    var dfd = $q.defer();
    $http({
      method: "GET",
      url: "http://nominatim.openstreetmap.org/reverse?format=json&lat="+lat+'&lon='+lon+"&zoom=18&addressdetails=1"
    }).then(function(data){
      dfd.resolve(data.data);
    });
    return dfd.promise;
  };
});
