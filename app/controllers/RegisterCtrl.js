'use strict';

pdmsys.controller('RegisterCtrl',
  function RegisterCtrl($scope, userFactory, $stateParams, $state, md5) {
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

    $scope.registerUserWithUrlCode = function() {
      var reg = {
          password: md5.createHash($scope.registration.password),
          urlcode: $scope.invitationCode
        };
      userFactory.registerUserWithUrlCode(reg)
        .then(function() {
          $state.go("start.loginAndRegister");
        }, function() {
          $scope.registerStatus = 'An error occured during the registration.';
        });
    };

    $scope.checkIfUrlCodeIsValid = function() {
      $scope.invitationCode = $stateParams.invitationCode;

      if ($scope.invitationCode === undefined)
        $state.go("start.loginAndRegister");
      userFactory.checkIfUrlCodeIsValid({
          urlcode: $scope.invitationCode
        })
        .then(function() {

        }, function() {
          $state.go("start.loginAndRegister");
        });
    };



    $scope.registrationClass = function() {
      if ($scope.registerStatus === 'Registration failed.')
        return 'errorMessage';
      else
        return 'registerMessage';
    };

    $scope.registerUser = function() {
      var registrationWithHash = {
        firstname: $scope.registration.firstname,
        email: $scope.registration.email,
        lastname: $scope.registration.lastname,
        password: md5.createHash($scope.registration.password)
      };
      userFactory.insertUser(registrationWithHash)
        .then(function() {
          $scope.register = {};
          $scope.registerStatus = 'Registration successful.';
        }, function(error) {
          $scope.registerStatus = 'Registration failed.';
        })
    };

  });
