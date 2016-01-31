'use strict';

var pdmsys = angular.module('pdmsys', ['ui.router', 'validation.match', 'ngFileUpload',
  'swxSessionStorage', 'satellizer', 'uiRouterStyles',
  'pdmsys.HomeModule', 'pdmsys.ProjectHome', 'pdmsys.PreliminaryStudy',
  'pdmsys.FunctionalSpecification', 'pdmsys.RequirementSpecification', 'pdmsys.Finalization',
  'pdmsys.Miscellaneous', 'angular-md5'
]);

pdmsys.run(
    ['$rootScope', '$state', '$stateParams', '$auth',
      function($rootScope, $state, $stateParams, $auth) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeStart', function(event, toState) {
          if (toState.data.public === true && $auth.isAuthenticated() === true) {
            event.preventDefault();
            $state.go('home');
          }
          if (toState.data.public === undefined && $auth.isAuthenticated() === false) {
            event.preventDefault();
            $state.go('start.loginAndRegister');
          }
        });

      }
    ]
  )
  .config(['$stateProvider', '$urlRouterProvider', '$authProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider) {
      //for 401 responses
      $httpProvider.interceptors.push('UnauthorizedResponseInterceptor');
      $authProvider.baseUrl = 'http://localhost:8000';
      $authProvider.oauth2({
        name: 'pdmsys',
        redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
        authorizationEndpoint: 'http://localhost:8000'
      });

      $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
      $stateProvider
        .state('index', {
          url: "/",
          views: {
            "content": {
              templateUrl: "views/landingPage.html"
            }
          },
          data: {
            css: 'assets/css/agency.css',
            public: true,
            project: false,
            pageTitle: 'Welcome'
          }
        })
        .state('start', {
          abstract: true,
          url: "/start",
          views: {
            "content": {
              templateUrl: "views/user/start.html"
            }
          },
          data: {
            css: ['assets/css/start.css', 'assets/css/agency.css'],
            public: true,
            project: false,
            pageTitle: 'Start'
          }
        })
        .state('start.loginAndRegister', {
          url: '',
          views: {
            "login": {
              templateUrl: "views/user/login.html"
            },
            "register": {
              templateUrl: "views/user/register.html"
            }
          },
          data: {
            project: false
          }
        })
        .state('invitation', {
          url: "/invitation/:invitationCode",
          views: {
            "content": {
              templateUrl: "views/user/invitation.html"
            }
          },
          data: {
            css: ['assets/css/start.css', 'assets/css/agency.css'],
            public: true,
            project: false,
            login: true,
            pageTitle: 'Accept invitation'
          }
        })
        .state('userprofile', {
          url: '/profile',
          views: {
            "navbar": {
              templateUrl: "views/navbar.html"
            },
            "content": {
              templateUrl: "views/user/userprofile.html"
            }
          },
          data: {
            css: 'assets/css/navbar.css',
            project: false,
            pageTitle: 'Profile'
          }
        })
    }
  ]);
