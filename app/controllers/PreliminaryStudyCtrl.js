'use strict';

pdmsys.controller('PreliminaryStudyController',
  function PreliminaryStudyController($scope, preliminaryStudyFactory, $stateParams) {

    $scope.projectId;
    $scope.projectDescription = {};
    $scope.projectDescriptionStatusMessage = undefined;
    $scope.showDeleteButton = false;
    $scope.projectRisks = {};
    $scope.effort = {
      uawSimple: '',
      uawAverage: '',
      uawComplex: '',
      uucwSimple: '',
      uucwAverage: '',
      uucwComplex: '',
      t1: '',
      t2: '',
      t3: '',
      t4: '',
      t5: '',
      t6: '',
      t7: '',
      t8: '',
      t9: '',
      t10: '',
      t11: '',
      t12: '',
      t13: '',
      e1: '',
      e2: '',
      e3: '',
      e4: '',
      e5: '',
      e6: '',
      e7: '',
      e8: ''
    };


    $scope.insertProjectDescription = function(projectDescription) {
      preliminaryStudyFactory.insertProjectDescription($scope.projectId, projectDescription)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectDescriptionStatusMessage = 'Project description saved.'
        }, function() {
          $scope.projectDescriptionStatusMessage = 'An error occured.';
        });
    };

    $scope.getProjectDescription = function() {
      $scope.projectId = $stateParams.projectId;
      preliminaryStudyFactory.getProjectDescription($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectDescription = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteProjectDescription = function() {
      preliminaryStudyFactory.deleteProjectDescription($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = false;
          $scope.projectDescription = {};
        }, function() {});
    };

    $scope.insertRisk = function(risk) {
      preliminaryStudyFactory.insertRisk($scope.projectId, risk)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectDescriptionStatusMessage = 'Risk saved.'
          $scope.projectRisks.push(response.data);
        }, function() {
          $scope.projectDescriptionStatusMessage = 'An error occured.';
        });
    };

    $scope.getRisks = function() {
      $scope.projectId = $stateParams.projectId;
      preliminaryStudyFactory.getRisks($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectRisks = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteRisk = function(idx, risk) {
      preliminaryStudyFactory.deleteRisk($scope.projectId, risk.id)
        .then(function(response) {
          $scope.projectRisks.splice(idx, 1);
          $scope.projectDescriptionStatusMessage = 'Risk deleted.'
          if ($scope.projectRisks.length == 0)
            $scope.showDeleteButton = false;
        }, function() {
          $scope.projectDescriptionStatusMessage = 'An error occured.';
        });
    };


    $scope.insertEffortEstimation = function(projectDescription) {
      preliminaryStudyFactory.insertProjectDescription($scope.projectId, projectDescription)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectDescriptionStatusMessage = 'Project description saved.'
        }, function() {
          $scope.projectDescriptionStatusMessage = 'An error occured.';
        });
    };

    $scope.getEffortEstimation = function() {
      $scope.projectId = $stateParams.projectId;
      preliminaryStudyFactory.getProjectDescription($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectDescription = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteEffortEstimation = function() {
      preliminaryStudyFactory.deleteProjectDescription($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = false;
          $scope.projectDescription = {};
        }, function() {});
    };







  });
