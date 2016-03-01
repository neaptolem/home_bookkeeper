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
