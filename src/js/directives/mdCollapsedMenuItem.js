angular.module('wgHilfe')
  .directive('mdCollapsedMenuItem', function () {
    return {
      restrict: 'AE',
      replace: false,
      template: '<md-button ng-show="" ng-href="{{ ngHref }}">{{ ngLabel }}</md-button>',
      scope: {
        ngHref: "@",
        ngLabel: "@"
    }
  };
});