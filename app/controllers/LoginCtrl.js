'use strict';

pdmsys.controller('LoginCtrl',
  function LoginCtrl($scope, $auth, userFactory, $state, md5) {
    $scope.passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}/;

    $scope.login = {
      username: '',
      password: '',
      grant_type: 'password',
      client_id: 'f3d259ddd3ed8ff3843839b',
      client_secret: '4c7f6f8fa93d59c45502c0ae8c4a95b'
    };

    $scope.loginStatus = '';

    $scope.loginUser = function() {
  //    $scope.login.password = md5.createHash($scope.login.password);
      userFactory.loginUser($scope.login)
        .then(function(response) {
          $auth.setToken(response.data.access_token);
          $state.go('home');
        }, function(error) {
          $scope.loginStatus = 'Login failed.';
        });
    };
  });
