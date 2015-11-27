'use strict';

pdmsys.controller('ProjectHomeCtrl',
  function ProjectHomeCtrl($scope, $stateParams) {

    $scope.projectId = $stateParams.projectId;

    $scope.documentCategories = [{
      name: 'Preliminary study',
      url: 'preliminaryStudy.projectDescription({projectId:projectId})',
      percentFinished: '100'
    }, {
      name: 'Requirement specification',
      url :'requirementSpecification.productRequirement({projectId:projectId})',
      percentFinished: '50'
    }, {
      name: 'Functional specification',
      url: 'functionalSpecification',
      percentFinished: '70'
    }, {
      name: 'Finalization',
      url: 'finalization',
      percentFinished: '10'
    }];

    $scope.switchView = function (value) {
      switch(value) {
        case 0: return "preliminaryStudy.projectDescription({projectId:projectId})";;
      }
    }

    $scope.percentFinishedCalculation = function(percent) {
      if(percent < 50)
        return 'danger';
      else if (percent > 49 && percent < 89)
        return 'alright';
        else
          return 'ok';
    };

  });
