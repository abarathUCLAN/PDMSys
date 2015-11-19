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
    $stateProvider
      .state('index', {
        url: "/",
        templateUrl: "views/landingPage.html",
        data: {
          css: 'assets/css/agency.css'
        }
      })
      .state('start', {
        abstract: true,
        url: "/start",
        templateUrl: "views/start.html"
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
        abstract: true,
        url: "/home",
        controller: 'ProjectsCtrl',
        templateUrl: "views/home.html"
      })
      .state('home.projects', {
        url: '',
        views: {
          "allProjects": {
            templateUrl: "views/projects.html"
          },
          "createProject": {
            templateUrl: "views/createProject.html"
          }
        },
        data: {
          css: 'assets/css/home.css'
        }
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
