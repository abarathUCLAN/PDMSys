'use strict';

pdmsys.controller('LoginCtrl',
  function LoginCtrl($scope, $auth, $http, userFactory, $state) {
    $scope.passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}/;

    $scope.login = {
      username:'',
      password:'',
      grant_type:'password',
      client_id: 'f3d259ddd3ed8ff3843839b',
      client_secret:'4c7f6f8fa93d59c45502c0ae8c4a95b'
    };

    $scope.loginStatus = '';
      /**var request = $http({
  method: 'get',
  url: 'http://localhost:8000/api/user/test',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer MHgdVcKJCsOqiY3DTpyDhMgIhoSy00e65HX003cM'}**/
//}


/*request.success(function (data) {
  console.log(data);
});
    };*/

        $scope.loginUser = function() {
          userFactory.loginUser($scope.login)
          .then(function (response) {
              $auth.setToken(response.data.access_token);
              $state.go('home');
          },function (error) {
              $scope.loginStatus = 'Login failed.';
          });

            /**var request = $http({
        method: 'post',
        url: 'http://localhost:8000/api/users/login',
        data: $.param({
            'username' : 'te21asdf3st@test.com',
            'password' : 'password',
            'grant_type' : 'password',
            'client_id' : 'f3d259ddd3ed8ff3843839b',
            'client_secret' : '4c7f6f8fa93d59c45502c0ae8c4a95b'
        }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    request.success(function (data) {
        $auth.setToken(data.access_token);
    });

**/
  };


/**        var request = $http({
    method: 'post',
    url: 'http://localhost:8000/api/user/register',
    data: $.param({
        'email' : 'te21asdf3st@test.com',
        'password' : 'password',
        'firstname' : 'Firstn.ame',
        'lastname' : ' las_tn.ame'
    }),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

request.success(function (data) {
    console.log(data);
});**/


  });
