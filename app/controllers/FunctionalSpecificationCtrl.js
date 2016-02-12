'use strict';

pdmsys.controller('FunctionalSpecificationController',
  function FunctionalSpecificationController($scope, functionalSpecificationFactory, $stateParams, $rootScope) {

    $scope.projectId;
    $scope.projectStatusMessage = undefined;
    $scope.showDeleteButton = false;
    $scope.functional = [];
    $scope.implementation = {};
    $scope.requirement = {};
    $scope.form = {};
    $scope.funcModal = {};

    $rootScope.$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams) {
        $scope.projectStatusMessage = undefined;
      });


    $scope.insertFunctionalRequirement = function(requirement) {
      functionalSpecificationFactory.insertFunctionalRequirement($scope.projectId, requirement)
        .then(function(response) {
          $scope.requirement = {};
          $scope.form.form.$setUntouched();
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Functional requirement saved.'
          $scope.functional.push(response.data);
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getFunctionalRequirement = function() {
      $scope.projectId = $stateParams.projectId;
      functionalSpecificationFactory.getFunctionalRequirement($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.functional = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteFunctionalRequirement = function(idx, requirement) {
      functionalSpecificationFactory.deleteFunctionalRequirement($scope.projectId, requirement.id)
        .then(function(response) {
          $scope.functional.splice(idx, 1);
          $scope.projectStatusMessage = 'Functional requirement deleted.'
          if ($scope.implementation.length == 0)
            $scope.showDeleteButton = false;
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

   $scope.insertProjectImplementation = function(implementation) {
      functionalSpecificationFactory.insertProjectImplementation($scope.projectId, {
          "content": implementation.content
        })
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Project implementation saved.'
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getProjectImplementation = function() {
      $scope.projectId = $stateParams.projectId;
      functionalSpecificationFactory.getProjectImplementation($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.implementation = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteProjectImplementation = function() {
      functionalSpecificationFactory.deleteProjectImplementation($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = false;
          $scope.implementation = {};
        }, function() {});
    };

    $scope.openModalfunc = function(func, index){
        $scope.funcModal = {};
        $scope.funcModal = func;
        $scope.funcModal.index = index;
        $('#myModal').modal('show');
    };

  });
