'use strict';

var pdmsys = angular.module('pdmsys', ['ui.router', 'validation.match', 'ngFileUpload', 'swxSessionStorage', 'ngDialog', 'satellizer', 'uiRouterStyles', 'pdmsys.milestone']);

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
  .config(function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider) {
    $authProvider.baseUrl = 'http://localhost:8000';
    $authProvider.oauth2({
     name: 'pdmsys',
     redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
     authorizationEndpoint: 'http://localhost:8000'
   });

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $urlRouterProvider.otherwise("/");
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
          project: false
        }
      })
      .state('start', {
        abstract: true,
        url: "/start",
        views: {
          "content": {
            templateUrl: "views/start.html"
          }
        },
        data: {
          css: ['assets/css/start.css', 'assets/css/agency.css'],
          public: true,
          project: false
        }
      })
      .state('start.loginAndRegister', {
        url: '',
        views: {
          "login": {
            templateUrl: "views/login.html"
          },
          "register": {
            templateUrl: "views/register.html"
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
            templateUrl: "views/invitation.html"
          }
        },
        data: {
          css: ['assets/css/start.css', 'assets/css/agency.css'],
          public: true,
          project: false,
          login: true
        }
      })
      .state('home', {
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
            templateUrl: "views/projects.html"
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
            templateUrl: "views/createProject.html"
          }
        }
      })
      .state('createProject.views', {
        url: '',
        views: {
          "information": {
            templateUrl: "views/projectInformation.html"
          },
          "invitation": {
            templateUrl: "views/projectInvitation.html"
          },
          "confirmInformation": {
            templateUrl: "views/confirmInformation.html"
          }
        },
        data: {
          project: false
        }
      })
      .state('projectHome', {
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
            templateUrl: "views/project.projectHome.html"
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
      })
      .state('preliminaryStudy', {
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
            templateUrl: "views/project.preliminaryStudy.html"
          }
        }
      })
      .state('preliminaryStudy.projectDescription', {
        url: '/projectDescription',
        templateUrl: "views/preliminaryStudy/preliminaryStudy.projectDescription.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('preliminaryStudy.risks', {
        url: '/risks',
        templateUrl: "views/preliminaryStudy/preliminaryStudy.risks.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('preliminaryStudy.milestones', {
        url: '/milestones',
        data: {
          css: ['assets/libs/angular-gantt/assets/angular-gantt.css', 'assets/libs/angular-gantt/assets/angular-gantt-plugins.css']
        },
        templateUrl: "views/preliminaryStudy/preliminaryStudy.milestones.html"
      })
      .state('preliminaryStudy.effort', {
        url: '/effort',
        templateUrl: "views/preliminaryStudy/preliminaryStudy.effort.html"
      })
      .state('functionalSpecification', {
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
            templateUrl: "views/project.functionalSpecification.html"
          }
        }
      })
      .state('functionalSpecification.productRequirement', {
        url: '/productRequirement',
        templateUrl: "views/functionalSpecification/functionalSpecification.productRequirement.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('functionalSpecification.implementation', {
        url: '/implementation',
        templateUrl: "views/functionalSpecification/functionalSpecification.implementation.html",
        data: {
          css: 'assets/css/input.css'
        }
      })
      .state('requirementSpecification', {
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
            templateUrl: "views/project.requirementSpecification.html"
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
      })
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
            templateUrl: "views/project.finalization.html"
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
      })
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
            templateUrl: "views/project.miscellaneous.html"
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
      })
      .state('userprofile', {
        url: '/profile',
        views: {
          "navbar": {
            templateUrl: "views/navbar.html"
          },
          "content": {
            templateUrl: "views/userprofile.html"
          }
        },
        data: {
          css: 'assets/css/navbar.css',
          project: false
        }
      })
  });
