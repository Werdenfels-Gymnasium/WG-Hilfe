angular.module('wgHilfe')
  .directive('mdMenuItem', function() {
    return {
      restrict: 'AE',
      replace: false,
      template: function(elem, attr) {
        return attr.type == 'icon' ?
          '<md-button layout-row ng-href="{{ ngHref }}">{{ ngLabel }}<span flex></span>' +
          '<span class="md-toggle-icon"><md-icon md-svg-src="img/collapse-menu.svg"></md-icon>' +
          '</span></md-button>' : '<md-button ng-href="{{ ngHref }}">{{ ngLabel }}</md-button>';
      },
      scope: {
        ngHref: "@",
        ngLabel: "@"
      }
    };
});
