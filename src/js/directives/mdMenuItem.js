angular.module('wgHilfe')
  .directive('mdMenuItem', function() {
    return {
      restrict: 'AE',
      transclude: true,
      template: function(elem, attr) {
        if (attr.type === 'icon') {
          return '<md-button layout="row" ng-href="{{ link }}">' + 
              '<ng-transclude></ng-transclude>' +
              '<span flex>' + 
              '<span class="md-toggle-icon>' +
                '<md-icon md-svg-src="img/collapse-menu.svg"></md-icon>'
              '</span>' +
            '</md-button>';
        }
        return '<md-button ng-href="{{ link }}">' +
            '<ng-transclude></ng-transclude>' + 
          '</md-button>';
      },
      link: function(scope, element, attr) {
        scope.link = attr.ngHref || '';
      }
    };
});
