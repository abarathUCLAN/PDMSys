'use strict';

pdmsys.controller('UserprofileCtrl',
  function UserprofileCtrl($scope, userFactory, $state) {

    $scope.setting = {};
    $scope.statusMessage = undefined;

    $scope.editUserData = function(data) {
      userFactory.updateUser(data)
      .then(function() {
        $scope.statusMessage = 'Userdata updated.';
        $scope.setting.password = '';
        $scope.setting.passwordConfirm = '';
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
