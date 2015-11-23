'use strict';

pdmsys.controller('ProjectHomeCtrl',
  function ProjectHomeCtrl($scope, $stateParams) {

    $scope.projectId = $stateParams.projectId;

    $scope.documentCategories = [{
      name: 'Preliminary study',
      url: 'preliminaryStudy',
      percentFinished: '100'
    }, {
      name: 'Requirement specification',
      url :'requirementSpecification',
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

    $scope.test = function(percent) {
      if(percent < 50)
        return 'danger';
      else if (percent > 49 && percent < 89)
        return 'alright';
        else
          return 'ok';
    };

  });
