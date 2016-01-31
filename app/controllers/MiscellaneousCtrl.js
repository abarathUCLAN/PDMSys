'use strict';

pdmsys.controller('MiscellaneousController',
  function MiscellaneousController($scope, miscellaneousFactory, $stateParams, Upload) {

    $scope.projectId;
    $scope.projectStatusMessage = undefined;
    $scope.showDeleteButton = false;
    $scope.presentations = [];
    $scope.changeRequests = [];
    $scope.styleGuides = [];
    $scope.reports = [];

    $scope.insertPresentation = function(presentation) {
      if (presentation !== undefined) {
        miscellaneousFactory.insertPresentation($scope.projectId, presentation)
        .then(function (resp) {
          $scope.projectStatusMessage = "Presentation created.";
          $scope.showDeleteButton = true;
          $scope.presentations.push(resp.data);
        }, function (resp) {
          $scope.projectStatusMessage = "Please choose another name for your file."
        });
      } else {
        $scope.projectStatusMessage = "No file selected.";
      }
    };

    $scope.getPresentation = function() {
      $scope.projectId = $stateParams.projectId;
      miscellaneousFactory.getPresentation($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.presentations = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.downloadPresentation = function(presentationId) {
      miscellaneousFactory.downloadPresentation(presentationId);
    };

    $scope.deletePresentation = function(idx, Presentation) {
      miscellaneousFactory.deletePresentation($scope.projectId, Presentation.id)
        .then(function(response) {
          $scope.presentations.splice(idx, 1);
          $scope.projectStatusMessage = 'Presentation deleted.'
          if ($scope.presentations.length == 0)
            $scope.showDeleteButton = false;
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.insertChangeRequest = function(requirement) {
      miscellaneousFactory.insertChangeRequest($scope.projectId, requirement)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Change requests requirement saved.'
          $scope.changeRequests.push(response.data);
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getChangeRequest = function() {
      $scope.projectId = $stateParams.projectId;
      miscellaneousFactory.getChangeRequest($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.changeRequests = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteChangeRequest = function(idx, requirement) {
      miscellaneousFactory.deleteChangeRequest($scope.projectId, requirement.id)
        .then(function(response) {
          $scope.changeRequests.splice(idx, 1);
          $scope.projectStatusMessage = 'Change request deleted.'
          if ($scope.changeRequests.length == 0)
            $scope.showDeleteButton = false;
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.insertStyleGuide = function(requirement) {
      miscellaneousFactory.insertStyleGuide($scope.projectId, requirement)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Style guides requirement saved.'
          $scope.styleGuides.push(response.data);
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getStyleGuide = function() {
      $scope.projectId = $stateParams.projectId;
      miscellaneousFactory.getStyleGuide($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.styleGuides = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteStyleGuide = function(idx, requirement) {
      miscellaneousFactory.deleteStyleGuide($scope.projectId, requirement.id)
        .then(function(response) {
          $scope.styleGuides.splice(idx, 1);
          $scope.projectStatusMessage = 'Style guide deleted.'
          if ($scope.styleGuides.length == 0)
            $scope.showDeleteButton = false;
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.insertReport = function(requirement) {
      if(requirement.month == undefined || requirement.month == 0)
        requirement.month = 1;
      miscellaneousFactory.insertReport($scope.projectId, requirement)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Reports requirement saved.'
          $scope.reports.push(response.data);
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getReport = function() {
      $scope.projectId = $stateParams.projectId;
      miscellaneousFactory.getReport($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.reports = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteReport = function(idx, requirement) {
      miscellaneousFactory.deleteReport($scope.projectId, requirement.id)
        .then(function(response) {
          $scope.reports.splice(idx, 1);
          $scope.projectStatusMessage = 'Report deleted.'
          if ($scope.reports.length == 0)
            $scope.showDeleteButton = false;
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

  });
