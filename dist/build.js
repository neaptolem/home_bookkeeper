angular.module('app', [
  'app.routes',
  'app.directive.navbar',
  'app.directive.pagetitle',
  'smart-table'
]);

angular.module('app.routes', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/home/homeView.html'
      })
      .when('/chart',{
        templateUrl:'components/chart/chartView.html'
      });
  }]);

angular.module('app.directive.navbar', [])
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'shared/navbar/navbarView.html'
    };
  });

angular.module('app.directive.pagetitle', [])
  .directive('pagetitle', function() {
      return {
        restrict: 'E',
        templateUrl: 'shared/pagetitle/pagetitleView.html',
        scope: {
          pagetitle: "@"
        }
    };
  });

angular.module('app')
.controller("HomeCtrl",['$scope',function(scope) {
    console.log('homectrl');
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

    scope.purchases = test;
  }]);

