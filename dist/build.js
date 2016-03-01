angular.module('app', [
  'app.routes',
  'app.directive.navbar',
  'app.directive.pagetitle',
  'smart-table',
  'chartjs-directive'
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
  .controller('myController', function($scope){

    var data = {
      labels : ["January","February","March","April","May","June","July"],
      datasets : [
        {
          fillColor : "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : [65,59,90,81,56,55,40]
        },
        {
          fillColor : "rgba(151,187,205,0.5)",
          strokeColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          data : [28,48,40,19,96,27,100]
        }
      ]
    }

    $scope.myChart.data = data;
  });
