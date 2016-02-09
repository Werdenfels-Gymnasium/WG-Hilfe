(function() {

  var app = angular.module('wgHilfe', [
	 "ngMaterial",
	 "ngRoute",
   "hc.marked"
  ]);

  app.config(function($mdThemingProvider) {
    /*
    ## NEW DESIGN ##
    $mdThemingProvider.definePalette('soft-orange', {
      '50': 'FBE9E7',
      '100': 'FFCCBC',
      '200': 'FFAB91',
      '300': 'FF8A65',
      '400': 'FF7043',
      '500': 'FF7043',
      '600': 'F4511E',
      '700': 'E64A19',
      '800': 'D84315',
      '900': 'BF360C',
      'A100': 'FF9E80',
      'A200': 'FF6E40',
      'A400': 'FF3D00',
      'A700': 'DD2C00',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 400 A100 A200',
      'contrastStrongLightColors': '500 600 700 800 900 A400 A700'
    });*/

    $mdThemingProvider
      .theme('default')
      .primaryPalette('blue')
      .accentPalette('grey');
  });

  app.run(function($rootScope, $mdSidenav) {
    $rootScope.toggleSidenav = function() {
      $mdSidenav('left').toggle();
    };
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

    $locationProvider.html5Mode(false);
  });
})();