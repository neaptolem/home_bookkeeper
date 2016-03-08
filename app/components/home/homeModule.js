angular.module('app')
  .controller("HomeCtrl", ['$scope', function(scope) {
    scope.purchases = test;
  }]);

var d1 = new Date(2011, 1, 3);
var d2 = new Date(2016, 1, 2);
var d3 = new Date(2016, 1, 1);
var d4 = new Date();

var test = [{
  name: 'banana',
  type: 'outcome',
  date: d1,
  price: 12,
  currency: "USD"
}, {
  name: 'apple',
  type: 'outcome',
  date: d2,
  price: 12,
  currency: "USD"
}, {
  name: 'toy',
  type: 'outcome',
  date: d3,
  price: 12,
  currency: "UAH"
},{
  name: 'wage for april',
  type: 'income',
  date: d4,
  price: 6200,
  currency: "UAH"
}

];
