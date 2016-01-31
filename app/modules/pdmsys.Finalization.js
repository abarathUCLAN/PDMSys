'use strict';

angular.module('pdmsys.Finalization', [])
  .config(['$stateProvider', '$urlRouterProvider', '$authProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider) {
      $stateProvider
        .state('finalization', {
          abstract: true,
          url: "/project/{projectId:int}/finalization",
          data: {
            css: 'assets/css/navbar.css'
          },
          views: {
            "navbar": {
              templateUrl: "views/projectNavbar.html"
            },
            "content": {
              templateUrl: "views/finalization/project.finalization.html"
            }
          }
        })
        .state('finalization.acceptanceProtocol', {
          url: '/acceptanceProtocol',
          templateUrl: "views/finalization/finalization.acceptanceProtocol.html",
          data: {
            css: 'assets/css/input.css'
          }
        })
        .state('finalization.projectManual', {
          url: '/projectManual',
          templateUrl: "views/finalization/finalization.projectManual.html",
          data: {
            css: 'assets/css/input.css'
          }
        });
    }
  ]);
