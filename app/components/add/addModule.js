angular.module('app')
  .controller('addCtrl', function($scope, database) {
    $scope.item = $scope.item || {};
    $scope.addTag = function(item) {
      item.tags = item.tags || [];
      item.tags.push('asd');
    };
    $scope.add = function(item) {
      item.date = new Date(item.date);
      database.put(item)
        .then(() => {
          alert(item.name + "  added");
          $scope.$apply();
        })
        .catch(reason => {
          throw reason;
        });
    }
  });
