angular.module('ionicApp.services', ['ionic'])

.service('LoginService', function($q, $ionicLoading, $http) {
  return {
    loginUser: function(user, pass, server) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      var url = 'https://'+server+'/q10/api/index.php/';
      console.log('user : '+user+ ' pass : '+ pass + ' server: '+server);

      $ionicLoading.show({
        template: 'Conectando...'
      });

      $http({
        method: 'POST',
        url: url + 'dlogin',
        data: {
          usuario : user,
          password : pass
        },
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(data, status, headers, config) {
        entorno.setItem('q10url',url);
        $ionicLoading.hide();
        deferred.resolve(data);
      }).error(function(data, status, headers, config, statusText) {
        $ionicLoading.hide();
        deferred.reject(data.ws_message);
      });

      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      }

      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      }
      return promise;
    }
  }
})

.service('RestService', function($q, $ionicLoading, $http) {
  return {
    peticion: function() {
      console.log('RestService');
    }
  }
})


;

console.log('services loaded');
