angular
  .module('wgHilfe')
  .directive('mdCollapseMenuItem', MdCollapseMenuItem);

function MdCollapseMenuItem($compile, $mdUtil) {
  return {
    restrict: 'E',
    scope: {
      ngLabel: '@'
    },
    transclude: true,
    template: '<ul><div ng-transclude></div></ul>',
    link: postLink
  };

  function postLink(scope, element, attr) {
    var _collapseHeight;
    var isActive = false;
    var ulElement = element[0].querySelector('ul');

    // Compile our placeholder into the current scope.
    var collapsePlaceholder = angular.element('<md-menu-item type="icon">{{ ngLabel }}</md-menu-item>');
    collapsePlaceholder = $compile(collapsePlaceholder)(scope);

    $mdUtil.nextTick(function() {
      _collapseHeight = ulElement.getBoundingClientRect().height;

      // Update the menu height directly after postLink.
      updateIsOpen();
    });

    // Append our actual placeholder before the <ul>
    element.prepend(collapsePlaceholder);

    collapsePlaceholder.on('click', function() {
      if (!_collapseHeight) return;

      isActive = !isActive;

      updateIsOpen();
    });


    function updateIsOpen() {
      var targetHeight = isActive ? _collapseHeight + 'px' : 0;

      ulElement.style.height = targetHeight;
    }

  }
}
