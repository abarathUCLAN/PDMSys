'use strict';

pdmsys.controller('ProjectsCtrl',
  function ProjectsCtrl($scope) {
    $scope.projects = [{
      name: "Project One",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu",
      completion: "67"
    }, {
      name: "Project Two",
      description: "This is a description for project two.",
      completion: "50"
    }, {
      name: "Project 4",
      description: "This is a description for project three.",
      completion: "23"
    }, {
      name: "Project 2",
      description: "This is a description for project three.",
      completion: "23"
    }, {
      name: "Project swag",
      description: "This is a description for project three.",
      completion: "23"
    }, {
      name: "Project Three",
      description: "This is a description for project three.",
      completion: "23"
    }, {
      name: "Project Four",
      description: "This is a description for project four.",
      completion: "89"
    }];
  });
