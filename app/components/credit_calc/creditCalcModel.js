angular.module('app')
  .controller('creditCalcCtrl', ['$scope', function($scope) {
$scope.result;
$scope.perMounth;
    $scope.calculate=function(calc){
      $scope.result=calc.principial*(1+(calc.term/12)*(calc.rate/100));
      $scope.perMounth=$scope.result/calc.term;
    }
  }]);
