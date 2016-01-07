angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('HomeCtrl', function($scope, $ionicPlatform, $http) {
  function onSuccess(data, status) {
    console.log(data);
    $scope.note = data;
    _.each($scope.note.noteelements, function(n) {
      if (n.type == "checkbox") {
        if (n.contentA == "true") {
          n.contentA = true;
        } else {
          n.contentA = false;
        }
      }
    });
  }
  $http.post("http://104.197.47.172/note/findbyid", {
    "note": "568cea9012a7abe1049810d1"
  }).success(onSuccess);
});
