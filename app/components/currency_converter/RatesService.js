angular.module('app').factory('Rates', function($http) {
  return {
    getData: function() {
      return $http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then(function(result) {
          return result.data;
        });
    }
  }
});
