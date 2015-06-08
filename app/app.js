var app = angular.module("routing", ["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: "app/page1.html",
    controller: "ctrl1",
    resolve: {
      weather: function(service){
        return service.getWeather();
      }
    }

  })
  // .when('/away/:lat/:lon', {
  //   templateUrl: 'app/page2.html',
  //   controller: "ctrl2",
  //   resolve: {
  //     weather: function(service, $route){
  //       return service.getWeather($route.current.params.lat, $route.current.params.lon);
  //     }
  //   }
  // })
  .when("/dev/:artist", {
    templateUrl: 'app/page2.html',
    controller: "ctrl2",
    resolve: {
      artist: function(service, $route){
        return service.getSongs($route.current.params.artist);
      }
    }
  })


  .otherwise('/home');
});



function example(){
  var arr = [];
  for(var key in resolve){
    arr.push(resolve[key]());
  }
  $q.all(arr);
};
