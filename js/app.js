var appVersion = "0.1";
var preferences = window.localStorage;

angular.module('ionicApp', ['ionic', 'ngCordova', 'highcharts-ng', 'ionicApp.controllers', 'ionicApp.services'])

.run(function($ionicPlatform,$rootScope) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

})


.config(function($stateProvider, $urlRouterProvider, $provide, $httpProvider) {
  $stateProvider

  .state('menu', {
    url: '/menu',
    views: {
      'mainContent' :{
        templateUrl: 'common/empty.html'
      },
      'menuContent' :{
        templateUrl: 'common/empty.html'
      }
    }
  })
  .state('login', {
    url: '/login',
    views: {
      'mainContent' :{
        templateUrl: 'common/login.html',
        controller: 'LoginController'
      },
      'menuContent' :{
        menuContent: 'common/empty.html'
      }
    }
  })
  ;


  $urlRouterProvider.otherwise('/login');
});
