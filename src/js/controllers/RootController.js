angular.module('wgHilfe')
  .controller('RootController', RootController)
  .run(function($rootScope) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      $rootScope.loadedContent = false;
    });
    $rootScope.$on('$routeChangeSuccess', function(event, next, current) {
      $rootScope.loadedContent = true;
    });
  });

function RootController($rootScope, $scope, $routeParams, GuideService) {
  GuideService.fetchData().then(function(data) {
    $scope.loadedGuide = false;
    $scope.guides = data;
  }, function(error) {
    new Error('There occoured an error while reading the guides: ' + error);
  }).then(function() {
    $scope.loadedGuide = true;
  });
  $rootScope.isLoaded = function() {
    return (+ $rootScope.loadedContent & + $scope.loadedGuide) === 1 ? true : false;
  }
}