angular.module('wgHilfe')
  .controller('RootController', RootController);

function RootController($scope, $routeParams, GuideService) {

  GuideService.fetchData().then(function(data) {
    $scope.guides = data;
  }, function(error) {
    new Error('There occoured an error while reading the guides: ' + error);
  });

}