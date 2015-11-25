'use strict';

var pdmsys = angular.module('pdmsys', ['ui.router', 'validation.match', 'uiRouterStyles']);

pdmsys.run(
    ['$rootScope', '$state', '$stateParams',
      function($rootScope, $state, $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $urlRouterProvider.when('/project/{projectId:int}/preliminaryStudy', '/project/{projectId:int}/preliminaryStudy/projectDescription');
    $stateProvider
      .state('index', {
        url: "/",
        views: {
          "content": {
            templateUrl: "views/landingPage.html"
          }
        },
        data: {
          css: 'assets/css/agency.css'
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
        }
      })
      .state('home', {
        url: "/home",
        data: {
          css: 'assets/css/home.css'
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
          css: 'assets/css/createProject.css'
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
        }
      })
      .state('projectHome', {
        url: "/project/{projectId:int}",
        data: {
          css: ['assets/css/projectHome.css', 'assets/css/navbar.css']
        },
        views: {
          "navbar": {
            templateUrl: "views/projectNavbar.html"
          },
          "content": {
            templateUrl: "views/projectHome.html"
          }
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
        templateUrl: "views/preliminaryStudy/preliminaryStudy.projectDescription.html"
      })
      .state('preliminaryStudy.risks', {
        url: '/risks',
        templateUrl: "views/preliminaryStudy/preliminaryStudy.risks.html"
      })
      .state('preliminaryStudy.milestones', {
        url: '/milestones',
        templateUrl: "views/preliminaryStudy/preliminaryStudy.milestones.html"
      })
      .state('preliminaryStudy.marketAnalysis', {
        url: '/marketAnalysis',
        templateUrl: "views/preliminaryStudy/preliminaryStudy.marketAnalysis.html"
      })
      .state('preliminaryStudy.effort', {
        url: '/effort',
        templateUrl: "views/preliminaryStudy/preliminaryStudy.effort.html"
      })
      .state('preliminaryStudy.timeCost', {
        url: '/timeCost',
        templateUrl: "views/preliminaryStudy/preliminaryStudy.timeCost.html"
      })
      .state('preliminaryStudy.psp', {
        url: '/psp',
        templateUrl: "views/preliminaryStudy/preliminaryStudy.psp.html"
      })
      .state('preliminaryStudy.ucp', {
        url: '/ucp',
        templateUrl: "views/preliminaryStudy/preliminaryStudy.ucp.html"
      });
  });


/** pdmsys.config(function($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'views/landingPage.html',
        title: 'Landing page',
        css: 'assets/css/agency.css'
      }).
      when('/start', {
        controller: 'LoginCtrl',
        title: 'Login',
        templateUrl: 'views/login.html'
      }).
      when('/register', {
        templateUrl: 'views/register.html'
      }).
      when('/home', {
        controller: 'HomeController',
        templateUrl: 'views/home/home.html'
      }).
      when('/project/:projectId', {
        controller: '',
        templateUrl: ''
      }).
      otherwise({
        redirectTo: '/'
      });
})
.run(function($route, $rootScope) {
  $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
    $rootScope.title = $route.current.title;
  });
}); **/
