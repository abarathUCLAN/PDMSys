'use strict';

angular.module('pdmsys.RequirementSpecification', [])
  .config(['$stateProvider', '$urlRouterProvider', '$authProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider) {
      $stateProvider.state('requirementSpecification', {
        abstract: true,
        url: "/project/{projectId:int}/requirementSpecification",
        data: {
          css: 'assets/css/navbar.css'
        },
        views: {
          "navbar": {
            templateUrl: "views/projectNavbar.html"
          },
          "content": {
            templateUrl: "views/requirementSpecification/project.requirementSpecification.html"
          }
        }
      })
      .state('requirementSpecification.projectIntroduction', {
        url: '/introduction',
        templateUrl: "views/requirementSpecification/requirementSpecification.projectIntroduction.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('requirementSpecification.needs', {
        url: '/needToHave',
        templateUrl: "views/requirementSpecification/requirementSpecification.needToHave.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('requirementSpecification.nice', {
        url: '/niceToHave',
        templateUrl: "views/requirementSpecification/requirementSpecification.niceToHave.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('requirementSpecification.result', {
        url: '/result',
        templateUrl: "views/requirementSpecification/requirementSpecification.result.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('requirementSpecification.productUse', {
        url: '/productUse',
        templateUrl: "views/requirementSpecification/requirementSpecification.productUse.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('requirementSpecification.actualState', {
        url: '/actualState',
        templateUrl: "views/requirementSpecification/requirementSpecification.actualState.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('requirementSpecification.targetState', {
        url: '/targetState',
        templateUrl: "views/requirementSpecification/requirementSpecification.targetState.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('requirementSpecification.productData', {
        url: '/productData',
        templateUrl: "views/requirementSpecification/requirementSpecification.productData.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('requirementSpecification.nonfunctional', {
        url: '/nonfunctional',
        templateUrl: "views/requirementSpecification/requirementSpecification.nonfunctional.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('requirementSpecification.quality', {
        url: '/quality',
        templateUrl: "views/requirementSpecification/requirementSpecification.quality.html",
        data: {
          css: 'assets/css/input.css'
        }
      });
    }
  ]);
