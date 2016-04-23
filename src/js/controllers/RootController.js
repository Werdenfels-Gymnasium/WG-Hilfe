angular
  .module('wgHilfe')
  .controller('RootController', RootController);

function RootController($rootScope, $scope, $routeParams, GuideService) {

  // Initially set the load boolean for the guide
  $rootScope.loadingGuide = true;

  GuideService.fetchData().then(function(data) {
    $rootScope.loadingGuide = false;
    $scope.guides = data;
  }, function(error) {
    new Error('There occoured an error while reading the guides: ' + error);
  }).finally(function() {
    $scope.loadingGuide = true;
  });

}