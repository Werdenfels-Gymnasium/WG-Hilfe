angular
  .module('wgHilfe')
  .service('GuideService', GuideService);

function GuideService($q, $http, $sce) {

  var guideUrl = $sce.trustAsResourceUrl("content/guides/guides.json");

  this.fetchData = function() {
    return $q(function(resolve) {
      $http.get(guideUrl, {
        headers: {
          'Content-type': 'application/json'
        }
      }).then(function(success) {
        resolve(success.data);
      }, function(failure) {
        resolve(failure);
      });
    });
  };

}