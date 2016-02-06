angular
  .module('wgHilfe')
  .directive('mdCollapseMenuItem', MdCollapseMenuItem);

function MdCollapseMenuItem($compile, $timeout) {
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
    var isActive = false;
    var $ul = angular.element(element[0].querySelectorAll('ul'));

    // Compile our placeholder into the current scope.
    var collapsePlaceholder = angular.element('<md-menu-item ng-label="{{ ngLabel }}"></md-menu-item>');
    collapsePlaceholder = $compile(collapsePlaceholder)(scope);

    // Append our actual placeholder before the <ul>
    element.prepend(collapsePlaceholder);

    collapsePlaceholder.on('click', function() {
      isActive = !isActive;

      updateIsOpen();
    });

    // Update the menu height directly in postLink.
    updateIsOpen();

    function updateIsOpen() {
      var targetHeight = isActive ? getTargetHeight() : 0;
      $timeout(function () {
        $ul.css({
          height: targetHeight + 'px'
        });
      }, 0, false);

      function getTargetHeight() {
        var targetHeight;
        $ul.addClass('no-transition');
        $ul.css('height', '');
        targetHeight = $ul.prop('clientHeight');
        $ul.css('height', 0);
        $ul.removeClass('no-transition');
        return targetHeight;
      }
    }

  }
}
