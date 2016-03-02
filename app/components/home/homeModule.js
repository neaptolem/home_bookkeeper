angular.module('app')
.controller("HomeCtrl",['$scope',function(scope) {
    scope.purchases = test;
  }]);

  var d1 = new Date(2011, 1, 3);
  var d2 = new Date(2016, 1, 2);
  var d3 = new Date();

  var test = [{
    purchase: 'banan',
    date: d1,
    price: 12
  }, {
    purchase: 'apple',
    date: d2,
    price: 12
  }, {
    purchase: 'toy',
    date: d3,
    price: 12
  }];
