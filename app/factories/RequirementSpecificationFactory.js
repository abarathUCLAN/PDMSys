'use strict';

angular.module('pdmsys')
  .factory('requirementSpecificationFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8000/api/requirementSpecification';
    var dataFactory = {};

    dataFactory.insertProjectIntroduction = function(projectId, projectIntroduction) {
      return $http.post(urlBase + '/projectIntroduction/' + projectId, projectIntroduction);
    };

    dataFactory.deleteProjectIntroduction = function(projectId) {
      return $http.post(urlBase + '/projectIntroduction/delete/' + projectId);
    };

    dataFactory.getProjectIntroduction = function(projectId) {
      return $http.get(urlBase + '/projectIntroduction/' + projectId);
    };




    dataFactory.insertNeedToHave = function(projectId, need) {
      return $http.post(urlBase + '/needToHave/' + projectId, need);
    };

    dataFactory.deleteNeedToHave = function(projectId, needId) {
      return $http.post(urlBase + '/needToHave/delete/' + projectId + '/' + needId);
    };

    dataFactory.getNeedToHave = function(projectId) {
      return $http.get(urlBase + '/needToHave/' + projectId);
    };




    dataFactory.insertNiceToHave = function(projectId, have) {
      return $http.post(urlBase + '/niceToHave/' + projectId, have);
    };

    dataFactory.deleteNiceToHave = function(projectId, haveId) {
      return $http.post(urlBase + '/niceToHave/delete/' + projectId + '/' + haveId);
    };

    dataFactory.getNiceToHave = function(projectId) {
      return $http.get(urlBase + '/niceToHave/' + projectId);
    };




    dataFactory.insertProjectResult = function(projectId, projectResult) {
      return $http.post(urlBase + '/projectResult/' + projectId, projectResult);
    };

    dataFactory.deleteProjectResult = function(projectId) {
      return $http.post(urlBase + '/projectResult/delete/' + projectId);
    };

    dataFactory.getProjectResult = function(projectId) {
      return $http.get(urlBase + '/projectResult/' + projectId);
    };



    dataFactory.insertProjectUse = function(projectId, use) {
      return $http.post(urlBase + '/projectUse/' + projectId, use);
    };

    dataFactory.deleteProjectUse = function(projectId) {
      return $http.post(urlBase + '/projectUse/delete/' + projectId);
    };

    dataFactory.getProjectUse = function(projectId) {
      return $http.get(urlBase + '/projectUse/' + projectId);
    };



    dataFactory.insertActualState = function(projectId, state) {
      return $http.post(urlBase + '/actualState/' + projectId, state);
    };

    dataFactory.deleteActualState = function(projectId) {
      return $http.post(urlBase + '/actualState/delete/' + projectId);
    };

    dataFactory.getActualState = function(projectId) {
      return $http.get(urlBase + '/actualState/' + projectId);
    };


    dataFactory.insertTargetState = function(projectId, state) {
      return $http.post(urlBase + '/targetState/' + projectId, state);
    };

    dataFactory.deleteTargetState = function(projectId) {
      return $http.post(urlBase + '/targetState/delete/' + projectId);
    };

    dataFactory.getTargetState = function(projectId) {
      return $http.get(urlBase + '/targetState/' + projectId);
    };



    dataFactory.insertProductData = function(projectId, data) {
      return $http.post(urlBase + '/productData/' + projectId, data);
    };

    dataFactory.deleteProductData = function(projectId) {
      return $http.post(urlBase + '/productData/delete/' + projectId);
    };

    dataFactory.getProductData = function(projectId) {
      return $http.get(urlBase + '/productData/' + projectId);
    };



    dataFactory.insertNonFunctionalRequirement = function(projectId, requirement) {
      return $http.post(urlBase + '/nonFunctionalRequirement/' + projectId, requirement);
    };
    dataFactory.deleteNonFunctionalRequirement = function(projectId, requirementId) {
      return $http.post(urlBase + '/nonFunctionalRequirement/delete/' + projectId + '/' + requirementId);
    };

    dataFactory.getNonFunctionalRequirement = function(projectId) {
      return $http.get(urlBase + '/nonFunctionalRequirement/' + projectId);
    };


    dataFactory.insertProductQuality = function(projectId, quality) {
      return $http.post(urlBase + '/projectQuality/' + projectId, quality);
    };

    dataFactory.deleteProductQuality = function(projectId) {
      return $http.post(urlBase + '/projectQuality/delete/' + projectId);
    };

    dataFactory.getProductQuality = function(projectId) {
      return $http.get(urlBase + '/projectQuality/' + projectId);
    };


    return dataFactory;

  }]);
