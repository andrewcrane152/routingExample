angular.module("routing").controller("ctrl2", function($scope, artist){
  $scope.song = artist[0].trackName;
});
