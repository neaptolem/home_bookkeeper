angular.module('app')
  .controller("LineCtrl", function($scope, $timeout, database) {
    database.getAllTags()
      .then(tags => {
        $scope.tags = tags.map(tag => {
          return tag;
        });
        $scope.$apply();
      });

    $scope.onSelect = function() {
      database.getAllWhereTag($scope.selectedTag)
        .then(items => {
          console.log(items);
          items = items.sort(function(a, b) {
            return +(a.date > b.date) || +(a.date === b.date) - 1;
          });
          $scope.series = [$scope.selectedTag];
          $scope.labels = [];
          $scope.data = [[]];
          items.forEach(tag => {
            $scope.labels.push(tag.date);
            $scope.data[0].push(tag.type === "income" ? tag.price : -tag.price);
          });
          $scope.$apply();
        });
    };
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function(points, evt) {
      console.log(points, evt);
    };
  });
