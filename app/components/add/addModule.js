angular.module('app')
  .controller('addCtrl', ['$scope', function($scope) {
    $scope.addObject = {};
    $scope.add = function(item) {
      console.log(item);
    }
  }]);
