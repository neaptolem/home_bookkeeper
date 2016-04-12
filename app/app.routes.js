angular.module('app.routes', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/home/homeView.html'
      })
      .when('/chart',{
        templateUrl:'components/chart/chartView.html'
      })
      .when('/calc/credit',{
        templateUrl:'components/credit_calc/creditCalcView.html'
      })
      .when('/add',{
        templateUrl:'components/add/addView.html'
      })
      .when('/converter',{
        templateUrl:'components/currency_converter/currencyConverterView.html'
      });
  }]);
