'use strict';

pdmsys.controller('ProjectsCtrl',
  function ProjectsCtrl($scope, projectFactory) {
    $scope.projects = {};

    $scope.projectStatus;

    $scope.getProjects = function() {
      projectFactory.getProjects()
        .then(function(response) {
          $scope.projects = response.data;
        }, function(error) {
          $scope.projectStatus = 'No projects found.';
        })
    };
  });
