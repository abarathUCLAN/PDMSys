'use strict';

pdmsys.controller('UserprofileCtrl',
  function UserprofileCtrl($scope, userFactory, $state, md5) {

    $scope.setting = {};
    $scope.form = {};
    $scope.statusMessage = undefined;
    $scope.passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}/;

    $scope.editUserData = function(data) {
      data.password = md5.createHash(data.password);
      userFactory.updateUser(data)
      .then(function() {
        $scope.statusMessage = 'Userdata updated.';
        $scope.setting.password = '';
        $scope.setting.passwordConfirm = '';
        $scope.form.form.$setUntouched();
      }, function() {
        $scope.statusMessage = 'An error occured, please check your inputs.';
      });
    };

    $scope.getUserData = function (data) {
      userFactory.getUserData(data)
      .then(function(response) {
        $scope.setting = response.data;
      }, function() {
        $state.go("home");
      });
    };
  });
