'use strict';

pdmsys.controller('ProjectDetailsCtrl',
  function ProjectDetailsCtrl($scope) {

    $scope.changeOpenedViewTab = function() {
      if ($scope.project.acronym == undefined)
        $scope.project.acronym = '';
      $scope.$emit('projectInformationData', $scope.project);
    };



  });
