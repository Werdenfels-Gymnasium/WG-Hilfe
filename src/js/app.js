(function() {

  var app = angular.module('wgHilfe', [
	 "ngMaterial",
	 "ngRoute",
   "hc.marked"
  ]);

  app.config(function($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('blue')
      .accentPalette('grey');
  });

  app.run(function($rootScope, $mdSidenav) {
    $rootScope.toggleSidenav = function() {
      $mdSidenav('left').toggle();
    };

    $rootScope.$on('$routeChangeStart', function() {
      $rootScope.loadingRoute = true;
    });

    $rootScope.$on('$routeChangeSuccess', function() {
      $rootScope.loadingRoute = false;
    });

    $rootScope.isLoading = function() {
      return $rootScope.loadingRoute && $rootScope.loadingGuide;
    }

  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
      templateUrl: 'partials/home.tmpl.html'
    }).when("/guide/:id", {
      templateUrl: 'partials/guide.tmpl.html',
      controller: "GuideController"
    }).otherwise({
      templateUrl: 'partials/404.tmpl.html'
    });

  //  $locationProvider.html5Mode(true);
  });

})();