angular.module('ionicApp.controllers', ['ionic','ionicApp.services'])


.controller('LoginController', function($scope, LoginService, $ionicPopup, $state) {

  $scope.data = {
    ip : preferences.getItem('servidor'),
    user : preferences.getItem('user'),
    password : ''
  };

  $scope.login = function() {
        LoginService.loginUser($scope.data.user, $scope.data.password,$scope.data.ip).success(function(data) {
          console.log('usuario :'+$scope.data.user);
          preferences.setItem('user',$scope.data.user);
          $state.go('ventas');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Error',
                template: data
            });
        });
    }
})


;








