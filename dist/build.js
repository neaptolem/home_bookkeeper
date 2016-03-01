angular.module('app', [
  'app.routes',
  'app.directive.navbar',
  'app.directive.pagetitle',
  'chart.js',
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

angular.module('app')
  .controller("LineCtrl", ['$scope', '$timeout', function($scope, $timeout) {

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function(points, evt) {
      console.log(points, evt);
    };

    // Simulate async data update
    $timeout(function() {
      $scope.data = [
        [28, 48, 40, 19, 86, 27, 90],
        [65, 59, 80, 81, 56, 55, 40]
      ];
    }, 3000);
  }]);
