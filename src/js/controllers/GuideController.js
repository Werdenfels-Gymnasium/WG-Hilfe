angular.module('wgHilfe')
  .controller('GuideController', GuideController);

function GuideController($scope, $routeParams, $location, GuideService) {

  var guides;
  var id = $routeParams.id;
	
  GuideService.fetchData().then(function(data) {
    guides = data;
    loadGuide();
  }, function(error) {
    $scope.title = "Fehler";
    $scope.error = "Es ist ein Fehler beim Laden der Anleitungen aufgetreten.";
  });

  function loadGuide() {
    if (angular.isDefined(guides[id])) {
      var guide = guides[id];
      $scope.title = guide.title;
      $scope.path = 'content/guides/' + guide.path;
      $scope.submenu = guide.submenu;
    } else {
      $scope.title = "Fehler";
      $scope.error = "Die gesuchte Anleitung konnte nicht in unserer Datenbank gefunden werden.";
    }
  }
}