'use strict';

pdmsys.controller('FinalizationController',
  function FinalizationController($scope, finalizationFactory, $stateParams, $rootScope) {

    $scope.projectId;
    $scope.projectStatusMessage = undefined;
    $scope.showDeleteButton = false;
    $scope.protocol = [];
    $scope.manual = {};
    $scope.form = {};
    $scope.acceptanceprotocol = {};
    $scope.proModal = {};

    $rootScope.$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams) {
        $scope.projectStatusMessage = undefined;
      });


    $scope.insertProtocol = function(protocol) {
      finalizationFactory.insertProtocol($scope.projectId, protocol)
        .then(function(response) {
          $scope.acceptanceprotocol = {};
          $scope.form.form.$setUntouched();
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Protocol requirement saved.'
          $scope.protocol.push(response.data);
          $scope.acceptanceprotocol = {};
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getProtocol = function() {
      $scope.projectId = $stateParams.projectId;
      finalizationFactory.getProtocol($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.protocol = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteProtocol = function(idx, protocol) {
      finalizationFactory.deleteProtocol($scope.projectId, protocol.id)
        .then(function(response) {
          $scope.protocol.splice(idx, 1);
          $scope.projectStatusMessage = 'Protocol deleted.'
          if ($scope.protocol.length == 0)
            $scope.showDeleteButton = false;
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

   $scope.insertProjectManual = function(manual) {
      finalizationFactory.insertProjectManual($scope.projectId, {
          "content": manual.content
        })
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Project manual saved.'
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getProjectManual = function() {
      $scope.projectId = $stateParams.projectId;
      finalizationFactory.getProjectManual($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.manual = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteProjectManual = function() {
      finalizationFactory.deleteProjectManual($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = false;
          $scope.manual = {};
        }, function() {});
    };

    $scope.openModalpro = function(pro, index){
        $scope.proModal = {};
        $scope.proModal = pro;
        $scope.proModal.index = index;
        $('#myModal').modal('show');
    };

  });
