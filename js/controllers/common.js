angular.module('ionicApp.controllers', ['ionic','ionicApp.services'])


.controller('LoginController', function($scope, LoginService, $ionicPopup, $state) {

  $scope.data = {
    ip : preferences.getItem('servidor'),
    usuario : preferences.getItem('usuario'),
    password : ''
  };

  $scope.login = function() {
        LoginService.loginUser($scope.data.user, $scope.data.password,$scope.data.ip).success(function(data) {
          preferences.setItem('user',$scope.data.usuario);
          $state.go('menu');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Error',
                template: data
            });
        });
    }
})


;








