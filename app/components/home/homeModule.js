angular.module('app')
.controller("HomeCtrl", function($scope, database) {
   database.create()
  .then(database.getAll)
  .then(purchases => {
    if (purchases && purchases.length){
      return purchases;
    } else {
      var purchases = [{
        name: 'banana',
        type: 'outcome',
        date: new Date(2011, 1, 3),
        price: 12,
        currency: "USD"
      }, {
        name: 'apple',
        type: 'outcome',
        date: new Date(2016, 1, 2),
        price: 12,
        currency: "USD"
      }];
      return database.putAll(purchases)
      .then(() => purchases)
    }
  })
  .then(purchases => {
    $scope.purchases = purchases;
    $scope.purchases2 = [].concat(purchases);
    $scope.$apply();
  })
  .catch(reason => {
    throw reason;
  })
});
