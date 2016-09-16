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

  function postLink(scope, element) {
    var _collapseHeight;
    var isActive = false;
    var ulElement = element[0].querySelector('ul');

    // Compile our placeholder into the current scope.
    var collapsePlaceholder = angular.element('<md-menu-item type="icon">{{ ngLabel }}</md-menu-item>');
    collapsePlaceholder = $compile(collapsePlaceholder)(scope);

    requestAnimationFrame(function waitForElement() {
      _collapseHeight = ulElement.getBoundingClientRect().height;

      if (_collapseHeight) {
        // Update the menu height directly after postLink.
        updateIsOpen();
      } else {
        requestAnimationFrame(waitForElement);
      }
    });

    // Append our actual placeholder before the <ul>
    element.prepend(collapsePlaceholder);

    collapsePlaceholder.on('click', function() {
      if (!_collapseHeight) return;

      isActive = !isActive;

      updateIsOpen();
    });


    function updateIsOpen() {
      ulElement.style.height = isActive ? _collapseHeight + 'px' : 0;
    }

  }
}
