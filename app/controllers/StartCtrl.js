'use strict';

pdmsys.controller('StartCtrl',
  function StartCtrl($scope) {
    $scope.formButtonValue = false;
    $scope.invertFormButtonValue = function() {
      this.formButtonValue = !this.formButtonValue;
    };
  });
