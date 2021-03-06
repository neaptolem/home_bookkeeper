angular.module('app').controller('CurrencyConverterCtrl', function($scope, Rates, $timeout) {
  Rates.getData().then(function(rates) {
    $scope.rates = rates
  });
  $scope.getSelectedRate = function() {
    if ($scope.selectedRate == undefined) {
      return {
        ccy: "",
        base_ccy: "",
        buy: 0,
        sale: 0
      }
    }
    return JSON.parse($scope.selectedRate)
  };

  $scope.parseRate = function(rateStr) {
    return JSON.parse(rateStr)
  };

  $scope.calculate = function(amount) {
    var rate = $scope.getSelectedRate();
    $timeout(function() {
      $scope.result = amount * rate.buy;
      $scope.$apply();
    }, 0);
  }
});
