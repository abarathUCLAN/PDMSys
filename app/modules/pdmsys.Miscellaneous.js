'use strict';

angular.module('pdmsys.Miscellaneous', [])
  .config(['$stateProvider', '$urlRouterProvider', '$authProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider) {
      $stateProvider
      .state('miscellaneous', {
        abstract: true,
        url: "/project/{projectId:int}/miscellaneous",
        data: {
          css: 'assets/css/navbar.css'
        },
        views: {
          "navbar": {
            templateUrl: "views/projectNavbar.html"
          },
          "content": {
            templateUrl: "views/miscellaneous/project.miscellaneous.html"
          }
        }
      })
      .state('miscellaneous.presentations', {
        url: '/presentations',
        templateUrl: "views/miscellaneous/miscellaneous.presentations.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('miscellaneous.changeRequests', {
        url: '/changeRequests',
        templateUrl: "views/miscellaneous/miscellaneous.changeRequests.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('miscellaneous.codeStyleGuide', {
        url: '/codeStyleGuide',
        templateUrl: "views/miscellaneous/miscellaneous.codeStyleGuide.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('miscellaneous.monthlyReports', {
        url: '/monthlyReports',
        templateUrl: "views/miscellaneous/miscellaneous.monthlyReports.html",
        data: {
          css: 'assets/css/input.css'
        }
      });
    }
  ]);
