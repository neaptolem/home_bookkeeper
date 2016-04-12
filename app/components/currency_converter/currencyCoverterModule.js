
angular.module('app').controller('CurrencyConverterCtrl', ['$scope', 'Rates',function($scope, Rates) {
  Rates.getData().then(function(rates) {
    $scope.rates = rates
  })
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
  }

  $scope.parseRate = function(rateStr){
    return JSON.parse(rateStr)
  }

  $scope.calculate = function(amount) {
    var rate = $scope.getSelectedRate()
    $scope.result = amount * rate.buy
    $scope.$apply()
  }
}])
