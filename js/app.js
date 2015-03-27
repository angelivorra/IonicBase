var appVersion = "0.1";
var entorno = window.localStorage;

angular.module('ionicApp', ['ionic', 'ngCordova', 'ionicApp.controllers', 'ionicApp.services'])

.run(function($ionicPlatform,$rootScope) {
  $rootScope.$on('$stateChangeStart',
                 function(event, toState, toParams, fromState, fromParams) {
                   console.log('Cambio: '+fromState.name + '->' + toState.name);
                 });


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
      'contenido' :{
        templateUrl: 'comunes/vacio.html'
      },
      'menu' :{
        templateUrl: 'comunes/vacio.html'
        //controller: 'MenuController'
      }
    }
  })
  .state('login', {
    url: '/login',
    views: {
      'contenido' :{
        templateUrl: 'comunes/login.html',
        controller: 'LoginController'
      },
      'menu' :{
        templateUrl: 'comunes/vacio.html'
      }
    }
  })
  ;


  $urlRouterProvider.otherwise('/login');
});
