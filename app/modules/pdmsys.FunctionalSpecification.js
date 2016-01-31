'use strict';

angular.module('pdmsys.FunctionalSpecification', [])
  .config(['$stateProvider', '$urlRouterProvider', '$authProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider) {
      $stateProvider.state('functionalSpecification', {
        abstract: true,
        url: "/project/{projectId:int}/functionalSpecification",
        data: {
          css: 'assets/css/navbar.css'
        },
        views: {
          "navbar": {
            templateUrl: "views/projectNavbar.html"
          },
          "content": {
            templateUrl: "views/functionalSpecification/project.functionalSpecification.html"
          }
        }
      })
      .state('functionalSpecification.productRequirement', {
        url: '/productRequirement',
        templateUrl: "views/functionalSpecification/functionalSpecification.productRequirement.html",
        data: {
          css: 'assets/css/input.css',
          pageTitle: 'Requirement'
        }
      })
      .state('functionalSpecification.implementation', {
        url: '/implementation',
        templateUrl: "views/functionalSpecification/functionalSpecification.implementation.html",
        data: {
          css: 'assets/css/input.css',
          pageTitle: 'Implementation'
        }
      });
    }
  ]);
