'use strict';

pdmsys.controller('ProjectsCtrl',
  function ProjectsCtrl($scope, projectFactory) {
    $scope.projects = {};

    $scope.getProjects = function () {
      projectFactory.getAllProjects()
      .then(function (response) {
          $scope.projects = response.data;
      },function (error) {
          $scope.projectStatus = 'No projects found.';
      })};
      
  });
