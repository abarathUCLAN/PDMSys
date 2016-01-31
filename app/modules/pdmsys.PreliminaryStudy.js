'use strict';

angular.module('pdmsys.PreliminaryStudy', [])
  .config(['$stateProvider', '$urlRouterProvider', '$authProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider) {
      $stateProvider.state('preliminaryStudy', {
          abstract: true,
          url: "/project/{projectId:int}/preliminaryStudy",
          data: {
            css: 'assets/css/navbar.css'
          },
          views: {
            "navbar": {
              templateUrl: "views/projectNavbar.html"
            },
            "content": {
              templateUrl: "views/preliminaryStudy/project.preliminaryStudy.html"
            }
          }
        })
        .state('preliminaryStudy.projectDescription', {
          url: '/projectDescription',
          templateUrl: "views/preliminaryStudy/preliminaryStudy.projectDescription.html",
          data: {
            css: 'assets/css/input.css',
            pageTitle: 'Project description'
          }
        })
        .state('preliminaryStudy.risks', {
          url: '/risks',
          templateUrl: "views/preliminaryStudy/preliminaryStudy.risks.html",
          data: {
            css: 'assets/css/input.css',
            pageTitle: 'Risks'
          }
        })
        .state('preliminaryStudy.effort', {
          url: '/effort',
          templateUrl: "views/preliminaryStudy/preliminaryStudy.effort.html",
          data: {
            pageTitle: 'Effort estimation'
          }
        });
    }
  ]);
