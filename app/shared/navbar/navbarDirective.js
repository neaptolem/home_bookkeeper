angular.module('app.directive.navbar', [])
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'shared/navbar/navbarView.html'
    };
  });
