'use strict';

angular.module('pdmsys.HomeModule', [])
  .config(['$stateProvider', '$urlRouterProvider', '$authProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider) {
      $stateProvider.state('home', {
          url: "/home",
          data: {
            css: ['assets/css/home.css', 'assets/css/navbar.css'],
            project: false
          },
          views: {
            "navbar": {
              templateUrl: "views/navbar.html"
            },
            "content": {
              templateUrl: "views/home/projects.html"
            }
          }
        })
        .state('createProject', {
          abstract: true,
          url: "/createProject",
          controller: 'CreateProjectCtrl',
          data: {
            css: ['assets/css/createProject.css', 'assets/css/navbar.css'],
            project: false
          },
          views: {
            "navbar": {
              templateUrl: "views/navbar.html"
            },
            "content": {
              templateUrl: "views/home/createProject.html"
            }
          }
        })
        .state('createProject.views', {
          url: '',
          views: {
            "information": {
              templateUrl: "views/home/projectInformation.html"
            },
            "invitation": {
              templateUrl: "views/home/projectInvitation.html"
            },
            "confirmInformation": {
              templateUrl: "views/home/confirmInformation.html"
            }
          },
          data: {
            project: false
          }
        });
    }
  ]);
