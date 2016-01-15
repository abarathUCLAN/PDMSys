'use strict';

pdmsys.controller('RequirementSpecificationController',
  function RequirementSpecificationController($scope, requirementSpecificationFactory, $stateParams) {

    $scope.projectId;
    $scope.projectStatusMessage = undefined;
    $scope.showDeleteButton = false;
    $scope.projectIntroduction = {};
    $scope.projectNeeds = [];
    $scope.projectNices = [];
    $scope.nonFunctional = [];
    $scope.projectResult = {};
    $scope.projectUse = {};
    $scope.projectActualState = {};
    $scope.projectTargetState = {};
    $scope.projectProductData = {};
    $scope.projectQuality = {};

    $scope.insertProjectIntroduction = function(introduction) {
      requirementSpecificationFactory.insertProjectIntroduction($scope.projectId, {
          "content": introduction.content
        })
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Project introduction saved.'
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getProjectIntroduction = function() {
      $scope.projectId = $stateParams.projectId;
      requirementSpecificationFactory.getProjectIntroduction($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectIntroduction = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteProjectIntroduction = function() {
      requirementSpecificationFactory.deleteProjectIntroduction($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = false;
          $scope.projectIntroduction = {};
        }, function() {});
    };

    $scope.insertNeedToHave = function(need) {
      requirementSpecificationFactory.insertNeedToHave($scope.projectId, need)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Need saved.'
          $scope.projectNeeds.push(response.data);
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getNeedToHave = function() {
      $scope.projectId = $stateParams.projectId;
      requirementSpecificationFactory.getNeedToHave($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectNeeds = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteNeed = function(idx, need) {
      requirementSpecificationFactory.deleteNeedToHave($scope.projectId, need.id)
        .then(function(response) {
          $scope.projectNeeds.splice(idx, 1);
          $scope.projectStatusMessage = 'Need deleted.'
          if ($scope.projectNeeds.length == 0)
            $scope.showDeleteButton = false;
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.insertNiceToHave = function(nice) {
      requirementSpecificationFactory.insertNiceToHave($scope.projectId, nice)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Nice to have saved.'
          $scope.projectNices.push(response.data);
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getNiceToHaves = function() {
      $scope.projectId = $stateParams.projectId;
      requirementSpecificationFactory.getNiceToHave($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectNices = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteNice = function(idx, nice) {
      requirementSpecificationFactory.deleteNiceToHave($scope.projectId, nice.id)
        .then(function(response) {
          $scope.projectNices.splice(idx, 1);
          $scope.projectStatusMessage = 'Nice to have deleted.'
          if ($scope.projectNices.length == 0)
            $scope.showDeleteButton = false;
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.insertProjectResult = function(result) {
      requirementSpecificationFactory.insertProjectResult($scope.projectId, {
          "content": result.content
        })
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Project result saved.'
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getProjectResult = function() {
      $scope.projectId = $stateParams.projectId;
      requirementSpecificationFactory.getProjectResult($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectResult = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteProjectResult = function() {
      requirementSpecificationFactory.deleteProjectResult($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = false;
          $scope.projectResult = {};
        }, function() {});
    };

    $scope.insertProjectUse = function(use) {
      requirementSpecificationFactory.insertProjectUse($scope.projectId, {
          "content": use.content
        })
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Project use saved.'
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getProjectUse = function() {
      $scope.projectId = $stateParams.projectId;
      requirementSpecificationFactory.getProjectUse($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectUse = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteProjectUse = function() {
      requirementSpecificationFactory.deleteProjectUse($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = false;
          $scope.projectUse = {};
        }, function() {});
    };


    $scope.insertActualState = function(state) {
      requirementSpecificationFactory.insertActualState($scope.projectId, {
          "content": state.content
        })
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Project actual state saved.'
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getActualState = function() {
      $scope.projectId = $stateParams.projectId;
      requirementSpecificationFactory.getActualState($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectActualState = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteActualState = function() {
      requirementSpecificationFactory.deleteActualState($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = false;
          $scope.projectActualState = {};
        }, function() {});
    };


    $scope.insertTargetState = function(state) {
      requirementSpecificationFactory.insertTargetState($scope.projectId, {
          "content": state.content
        })
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Project actual state saved.'
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getTargetState = function() {
      $scope.projectId = $stateParams.projectId;
      requirementSpecificationFactory.getTargetState($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectTargetState = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteTargetState = function() {
      requirementSpecificationFactory.deleteTargetState($scope.projectId)
      .then(function(response) {
        $scope.showDeleteButton = false;
        $scope.projectTargetState = {};
      }, function() {});
    };

    $scope.insertProductData = function(data) {
      requirementSpecificationFactory.insertProductData($scope.projectId, {
          "content": data.content
        })
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Project data  saved.'
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getProductData = function() {
      $scope.projectId = $stateParams.projectId;
      requirementSpecificationFactory.getProductData($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectProductData = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteProductData = function() {
      requirementSpecificationFactory.deleteProductData($scope.projectId)
      .then(function(response) {
        $scope.showDeleteButton = false;
        $scope.projectProductData = {};
      }, function() {});
    };


    $scope.insertNonFunctionalRequirement = function(requirement) {
      requirementSpecificationFactory.insertNonFunctionalRequirement($scope.projectId, requirement)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Non functional requirement saved.'
          $scope.nonFunctional.push(response.data);
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getNonFunctionalRequirement = function() {
      $scope.projectId = $stateParams.projectId;
      requirementSpecificationFactory.getNonFunctionalRequirement($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.nonFunctional = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteNonFunctionalRequirement = function(idx, requirement) {
      requirementSpecificationFactory.deleteNonFunctionalRequirement($scope.projectId, requirement.id)
        .then(function(response) {
          $scope.nonFunctional.splice(idx, 1);
          $scope.projectStatusMessage = 'Non functional requirement deleted.'
          if ($scope.nonFunctional.length == 0)
            $scope.showDeleteButton = false;
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.insertProductQuality = function(quality) {
      requirementSpecificationFactory.insertProductQuality($scope.projectId, {
          "content": quality.content
        })
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectStatusMessage = 'Project quality saved.'
        }, function() {
          $scope.projectStatusMessage = 'An error occured.';
        });
    };

    $scope.getProductQuality = function() {
      $scope.projectId = $stateParams.projectId;
      requirementSpecificationFactory.getProductQuality($scope.projectId)
        .then(function(response) {
          $scope.showDeleteButton = true;
          $scope.projectQuality = response.data;
        }, function() {
          $scope.showDeleteButton = false;
        });
    };

    $scope.deleteProductQuality = function() {
      requirementSpecificationFactory.deleteProductQuality($scope.projectId)
      .then(function(response) {
        $scope.showDeleteButton = false;
        $scope.projectQuality = {};
      }, function() {});
    };

  });
