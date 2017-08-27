'use strict';

/**
 * @ngdoc overview
 * @name a1App
 * @description
 * # a1App
 *
 * Main module of the application.
 */
angular
  .module('a1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/assignments', {
        templateUrl: 'views/assignments.html',
        controller: 'AssignmentsCtrl',
        controllerAs: 'assignments'
      })
      .when('/assignments/1', {
        templateUrl: 'views/assignment1.html',
        controller: 'Assignment1Ctrl',
        controllerAs: 'assignment1'
      })
      .when('/assignments/2', {
        templateUrl: 'views/assignment2.html',
        controller: 'Assignment2Ctrl',
        controllerAs: 'assignment2'
      })
      .when('/dontclicme', {
        templateUrl: 'views/me.html',
        controller: 'MeCtrl',
        controllerAs: 'me'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
