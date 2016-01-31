'use strict';

angular.module('pdmsys.ProjectHome', [])
  .config(['$stateProvider', '$urlRouterProvider', '$authProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider) {
      $stateProvider.state('projectHome', {
        url: "/project/{projectId:int}",
        abstract: true,
        data: {
          css: ['assets/css/projectHome.css', 'assets/css/navbar.css']
        },
        views: {
          "navbar": {
            templateUrl: "views/projectNavbar.html"
          },
          "content": {
            templateUrl: "views/projectHome/project.projectHome.html"
          }
        }
      })
      .state('projectHome.dashboard', {
        url: '/dashboard',
        templateUrl: "views/projectHome/projectHome.dashboard.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('projectHome.members', {
        url: '/members',
        templateUrl: "views/projectHome/projectHome.members.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('projectHome.invitations', {
        url: '/invitations',
        templateUrl: "views/projectHome/projectHome.invitations.html",
        data: {
          css: 'assets/css/input.css'
        }
      });
    }
  ]);
