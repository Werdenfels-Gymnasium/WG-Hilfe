angular.module('wgHilfe')
  .directive('mdCollapsedMenuItem', function () {
    return {
      restrict: 'AE',
      replace: false,
      template: '<div ng-click="">{{ ngLabel }}</md-button>',
    };
  });