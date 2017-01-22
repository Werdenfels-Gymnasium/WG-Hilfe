angular
  .module('wgHilfe')
  .service('GuideService', GuideService);

function GuideService($q, $http) {

  this.fetchData = function() {
    return $q(function(resolve) {
      $http.get("/content/guides/guides.json", {
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