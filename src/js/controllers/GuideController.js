angular
  .module('wgHilfe')
  .controller('GuideController', GuideController);

function GuideController($scope, $routeParams, $location, $sce, GuideService) {

  var mergedGuides = [];
  var id = $routeParams.id;


  // Initial Value needed because Angular Marked does not truthy check the path.
  $scope.path = '';

  GuideService.fetchData().then(function(data) {

    for (var key in data) {
      var item = data[key];
      if (!item.collapse) {
        mergedGuides[key] = item;
      } else {
        for (var ckey in item.items) {
          mergedGuides[ckey] = item.items[ckey];
        }
      }
    }

    loadGuide();
  }, function(error) {
    $scope.title = "Fehler";
    $scope.error = "Es ist ein Fehler beim Laden der Anleitungen aufgetreten.";
  });

  function loadGuide() {
    if (angular.isDefined(mergedGuides[id])) {
      var guide = mergedGuides[id];
      $scope.title = guide.title;
      $scope.path = $sce.trustAsResourceUrl('content/guides/' + guide.path);
    } else {
      $scope.title = "Fehler";
      $scope.error = "Die gesuchte Anleitung konnte nicht in unserer Datenbank gefunden werden.";
    }
  }


}