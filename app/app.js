'use strict';

var pdmsys = angular.module('pdmsys', ['ngResource']);

pdmsys.config(function($routeProvider) {

  $routeProvider.
      when('/', {
        templateUrl: 'index.html'
      }).
      when('/login', {
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
      });;
});
