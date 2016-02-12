'use strict';

pdmsys.controller('ProjectHomeCtrl',
  function ProjectHomeCtrl($scope, $stateParams, projectFactory) {

    $scope.projectId;

    $scope.documentCategories = [{
      name: 'Preliminary study',
      url: 'preliminaryStudy.projectDescription({projectId:projectId})',
      percentFinished: undefined
    }, {
      name: 'Requirement specification',
      url: 'requirementSpecification.productRequirement({projectId:projectId})',
      percentFinished: undefined
    }, {
      name: 'Functional specification',
      url: 'FunctionalSpecification.productRequirement({projectId:projectId})',
      percentFinished: undefined
    }, {
      name: 'Finalization',
      url: 'finalization.productRequirement({projectId:projectId})',
      percentFinished: undefined
    }];

    $scope.getDashboardData = function() {
      $scope.projectId = $stateParams.projectId;
      projectFactory.getDashboardData($scope.projectId)
        .then(function(res) {

          if (res.data.preliminaryStudy == 99)
            $scope.documentCategories[0].percentFinished = 100;
          else
            $scope.documentCategories[0].percentFinished = res.data.preliminaryStudy

          $scope.documentCategories[1].percentFinished = res.data.requirementSpecification;
          $scope.documentCategories[2].percentFinished = res.data.functionalSpecification;
          $scope.documentCategories[3].percentFinished = res.data.finalization;
        }, function(res) {

        });
    }

    $scope.switchView = function(value) {
      switch (value) {
        case 0:
          return "preliminaryStudy.projectDescription({projectId:projectId})";;
      }
    }

    $scope.percentFinishedCalculation = function(percent) {
      if (percent < 50)
        return 'danger';
      else if (percent > 49 && percent < 89)
        return 'alright';
      else
        return 'ok';
    };

  });
