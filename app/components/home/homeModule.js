angular.module('app.home',[])
  .controller("HomeCtrl",function($scope) {
    console.log('homectrl');
    var d1 = new Date(1, 1, 16);
    var d2 = new Date(2, 1, 16);
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

    $scope.purchases = test;
  });
