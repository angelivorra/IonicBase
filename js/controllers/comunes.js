angular.module('ionicApp.controllers', ['ionic','ionicApp.services'])


.controller('LoginController', function($scope, LoginService, $ionicPopup, $state) {

  $scope.data = {
    ip : entorno.getItem('servidor'),
    usuario : entorno.getItem('usuario'),
    password : ''
  };

  $scope.login = function() {
        LoginService.loginUser($scope.data.usuario, $scope.data.password,$scope.data.ip).success(function(data) {
          entorno.setItem('usuario',$scope.data.usuario);
          entorno.setItem('empresa',data.empresa);
          $state.go('menu');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Error al entrar!',
                template: data
            });
        });
    }
})


;








