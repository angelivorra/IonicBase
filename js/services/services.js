angular.module('ionicApp.services', ['ionic'])

.service('LoginService', function($q, $ionicLoading, $http) {
  return {
    loginUser: function(user, pass, server) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      //Here you can define your server base url
      var url = 'https://'+server+'/q10/api/index.php/';

      $ionicLoading.show();

      //Here you can login in your own api
      $http({
        method: 'POST',
        url: url + 'dlogin',
        data: {
          usuario : user,
          password : pass
        },
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(data, status, headers, config) {
        preferences.setItem('url',url);
        $ionicLoading.hide();
        deferred.resolve(data);
      }).error(function(data, status, headers, config, statusText) {
        $ionicLoading.hide();
        deferred.reject(data.ws_message);
      });

      /*

      $ionicLoading.hide();
      if (user=='demo') {
        deferred.resolve('User valid');
      } else {
        deferred.reject('User not valid');
      }
      */

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
