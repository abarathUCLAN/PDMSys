'use strict';

angular.module('pdmsys')
    .factory('requirementSpecificationFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8000/api/requirementSpecification';
    var dataFactory = {};

    dataFactory.insertProjectIntroduction = function (projectId, projectIntroduction) {
        return $http.post(urlBase + '/projectIntroduction/' + projectId, projectIntroduction);
    };

    dataFactory.updateProjectIntroduction = function (projectId, projectIntroduction) {
        return $http.put(urlBase + '/projectIntroduction/' + projectId, projectIntroduction);
    };

    dataFactory.deleteProjectIntroduction = function (projectId, projectIntroduction) {
        return $http.delete(urlBase + '/projectIntroduction/' + projectId, projectIntroduction);
    };

    dataFactory.getProjectIntroduction = function (projectId) {
        return $http.get(urlBase + '/projectIntroduction/' + projectId);
    };



    dataFactory.insertProjectResult = function (projectId, projectResult) {
        return $http.post(urlBase + '/projectResult/' + projectId, projectResult);
    };

    dataFactory.updateProjectResult = function (projectId, projectResult) {
        return $http.put(urlBase + '/projectResult/' + projectId, projectResult);
    };

    dataFactory.deleteProjectResult = function (projectId, projectResult) {
        return $http.delete(urlBase + '/projectResult/' + projectId, projectResult);
    };

    dataFactory.getProjectResult = function (projectId) {
        return $http.get(urlBase + '/projectResult/' + projectId);
    };



    dataFactory.insertProjectUse = function (projectId, use) {
        return $http.post(urlBase + '/projectUse/' + projectId, use);
    };

    dataFactory.updateProjectUse= function (projectId, use) {
        return $http.put(urlBase + '/projectUse/' + projectId, use);
    };

    dataFactory.deleteProjectUse = function (projectId, use) {
        return $http.delete(urlBase + '/projectUse/' + projectId, use);
    };

    dataFactory.getProjectUse = function (projectId) {
        return $http.get(urlBase + '/projectUse/' + projectId);
    };



    dataFactory.insertActualState = function (projectId, state) {
        return $http.post(urlBase + '/actualState/' + projectId, state);
    };

    dataFactory.updateActualState = function (projectId, state) {
        return $http.put(urlBase + '/actualState/' + projectId, state);
    };

    dataFactory.deleteActualState = function (projectId, state) {
        return $http.delete(urlBase + '/actualState/' + projectId, state);
    };

    dataFactory.getActualState = function (projectId) {
        return $http.get(urlBase + '/actualState/' + projectId);
    };


    dataFactory.insertTargetState = function (projectId, state) {
        return $http.post(urlBase + '/targetState/' + projectId, state);
    };

    dataFactory.updateTargetState = function (projectId, state) {
        return $http.put(urlBase + '/targetState/' + projectId, state);
    };

    dataFactory.deleteTargetState = function (projectId, state) {
        return $http.delete(urlBase + '/targetState/' + projectId, state);
    };

    dataFactory.getTargetState = function (projectId) {
        return $http.get(urlBase + '/targetState/' + projectId);
    };



    dataFactory.insertNeedToHave = function (projectId, need) {
        return $http.post(urlBase + '/needToHave/' + projectId, need);
    };

    dataFactory.updateNeedToHave = function (projectId, needId, need) {
        return $http.put(urlBase + '/needToHave/' + projectId + '/' + needId , need);
    };

    dataFactory.deleteNeedToHave = function (projectId, needId) {
        return $http.delete(urlBase + '/needToHave/' + needId);
    };

    dataFactory.getNeedToHaves = function (projectId) {
        return $http.get(urlBase + '/needToHave/' + projectId);
    };


    dataFactory.insertProductData = function (projectId, data) {
        return $http.post(urlBase + '/productData/' + projectId, data);
    };

    dataFactory.updateProductData  = function (projectId, data) {
        return $http.put(urlBase + '/productData/' + projectId, data);
    };

    dataFactory.deleteProductData  = function (projectId, data) {
        return $http.delete(urlBase + '/productData/' + projectId, data);
    };

    dataFactory.getProductData  = function (projectId) {
        return $http.get(urlBase + '/productData/' + projectId);
    };


    dataFactory.insertProjectQuality = function (projectId, quality) {
        return $http.post(urlBase + '/projectQuality/' + projectId, quality);
    };

    dataFactory.updateProjectQuality  = function (projectId, quality) {
        return $http.put(urlBase + '/projectQuality/' + projectId, quality);
    };

    dataFactory.deleteProjectQuality  = function (projectId, quality) {
        return $http.delete(urlBase + '/projectQuality/' + projectId, quality);
    };

    dataFactory.getProjectQuality  = function (projectId) {
        return $http.get(urlBase + '/projectQuality/' + projectId);
    };



    dataFactory.insertNonFunctionalRequirement = function (projectId, requirement) {
        return $http.post(urlBase + '/nonFunctionalRequirement/' + projectId, requirement);
    };

    dataFactory.updateNonFunctionalRequirement= function (projectId, requirementId, requirement) {
        return $http.put(urlBase + '/nonFunctionalRequirement/' + projectId + '/' + requirementId , requirement);
    };

    dataFactory.deleteNonFunctionalRequirement = function (projectId, requirementId) {
        return $http.delete(urlBase + '/nonFunctionalRequirement/' + requirementId);
    };

    dataFactory.getNonFunctionalRequirement = function (projectId) {
        return $http.get(urlBase + '/nonFunctionalRequirement/' + projectId);
    };


    dataFactory.insertNiceToHave = function (projectId, have) {
        return $http.post(urlBase + '/needToHave/' + projectId, have);
    };

    dataFactory.updateNiceToHave = function (projectId, haveId, have) {
        return $http.put(urlBase + '/needToHave/' + projectId + '/' + haveId , have);
    };

    dataFactory.deleteNiceToHave = function (projectId, haveId) {
        return $http.delete(urlBase + '/needToHave/' + haveId);
    };

    dataFactory.getNiceToHaves = function (projectId) {
        return $http.get(urlBase + '/needToHave/' + projectId);
    };

}]);
