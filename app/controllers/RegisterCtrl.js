'use strict';

pdmsys.controller('RegisterCtrl',
  function RegisterCtrl($scope, userFactory, $stateParams, $state) {
    $scope.passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}/;
    $scope.nameRegEx = /^[a-z ,.'-]+$/i;

    $scope.registerStatus = '';
    $scope.invitationCode = undefined;

    $scope.registration = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };

    $scope.registerUserWithUrlCode = function () {
      userFactory.registerUserWithUrlCode({password: $scope.registration.password, urlcode: $scope.invitationCode})
      .then(function() {
        $state.go("start.loginAndRegister");
      }, function() {
        $scope.registerStatus = 'An error occured during the registration.';
      });
    };

    $scope.checkIfUrlCodeIsValid = function () {
      $scope.invitationCode = $stateParams.invitationCode;

      if($scope.invitationCode === undefined)
        $state.go("start.loginAndRegister");
      userFactory.checkIfUrlCodeIsValid({urlcode: $scope.invitationCode})
      .then(function() {

      }, function() {
        $state.go("start.loginAndRegister");
      });
    };



    $scope.registrationClass = function () {
      if($scope.registerStatus === 'Registration failed.')
        return 'errorMessage';
      else
        return 'registerMessage';
    };

    $scope.registerUser = function () {
      userFactory.insertUser($scope.registration)
      .then(function () {
          $scope.registerStatus = 'Registration successful.';
      },function (error) {
          $scope.registerStatus = 'Registration failed.';
      })};

  });
