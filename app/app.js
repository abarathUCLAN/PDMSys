'use strict';

var pdmsys = angular.module('pdmsys', ['ui.router', 'ngRoute', 'door3.css']);

pdmsys.config(function($stateProvider, $routeProvider){

    $stateProvider
      .state('start', {
        url: "/start",
        views: {
          "login": { templateUrl: "views/login.html" },
          "register": { templateUrl: "views/register.html" }
        }
      });

    $routeProvider.
        when('/', {
          templateUrl: 'views/landingPage.html',
          title: 'Landing page',
          css: 'assets/css/agency.css'
        }).
        when('/start', {
          title: 'Login',
          templateUrl: 'views/start.html'
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
