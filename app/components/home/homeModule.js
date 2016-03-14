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
      }, {
        name: 'toy',
        type: 'outcome',
        date: new Date(2016, 1, 1),
        price: 12,
        currency: "UAH"
      }, {
        name: 'wage for april',
        type: 'income',
        date: new Date(),
        price: 6200,
        currency: "UAH"
      }];
      return database.putAll(purchases)
      .then(() => purchases)
    }
  })
  .then(purchases => {
    $scope.purchases = purchases;
    $scope.$apply();
  })
  .catch(reason => {
    //console.error(reason);
    throw reason;
  })
});
