'use strict';

pdmsys.controller('PreliminaryStudyController',
  function PreliminaryStudyController($scope, preliminaryStudyFactory, $stateParams) {

    $scope.projectId;
    $scope.projectDescription = {};
    $scope.projectDescriptionStatusMessage = undefined;
    $scope.showDeleteButton = false;
    $scope.projectRisks = [];
    $scope.effort = {};
    $scope.effortEstimationResult = undefined;
    $scope.effortWeight = [1, 2, 3, 5, 10, 15, 2, 1, 1, 1, 1, 0.5, 0.5, 2, 1, 1, 1, 1, 1, 1.5, 0.5, 1, 0.5, 1, 2, -1, -1];

    $scope.$watch('effort', function() {
      var counter = 0;
      var error = false;
      var uucw = 0;
      var uaw = 0;
      var tcf = 0;
      var ecf = 0;
      angular.forEach($scope.effort, function(value, key) {
        if (value === undefined)
          error = true;
        if (!error) {
          if (counter >= 0 && counter <= 2) {
            uucw += (value * $scope.effortWeight[counter]);
            counter++;
          } else if (counter >= 3 && counter <= 5) {
            uaw += (value * $scope.effortWeight[counter]);
            counter++;
          } else if (counter >= 6 && counter <= 18) {
            tcf += (value * $scope.effortWeight[counter]);
            counter++;
          } else {
            ecf += (value * $scope.effortWeight[counter]);
            counter++;
          }
        }
      });
      if(!error) {
        $scope.effortEstimationResult = (uucw + uaw) * (0.6 + (tcf/100)) * (1.4 + (-0.03 * ecf));
      }
    }, true);

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
      preliminaryStudyFactory.insertEffortEstimation($scope.projectId, {
          "content": $scope.effort
        })
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectDescriptionStatusMessage = 'Effort estimation saved.'
        }, function() {
          $scope.projectDescriptionStatusMessage = 'An error occured.';
        });
    };

    $scope.getEffortEstimation = function() {
      $scope.projectId = $stateParams.projectId;
      preliminaryStudyFactory.getEffortEstimation($scope.projectId)
        .then(function(response) {
          if(response.data.content !== undefined) {
            $scope.showDeleteButton = true;
            $scope.effort = (JSON.parse(response.data.content)).content;
          }
          else {
            $scope.showDeleteButton = true;
            $scope.effort = JSON.parse(response.data);
          }
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteEffortEstimation = function() {
      preliminaryStudyFactory.deleteEffortEstimation($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = false;
          $scope.effort = {};
        }, function() {});
    };







  });
