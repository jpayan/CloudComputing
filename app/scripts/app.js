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
    'ngTouch',
    'mwl.bluebird'
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
      .when('/assignments/0', {
        templateUrl: 'views/assignment0.html',
        controller: 'Assignment0Ctrl',
        controllerAs: 'assignment0'
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
      .when('/assignments/3', {
        templateUrl: 'views/assignment3.html',
        controller: 'Assignment3Ctrl',
        controllerAs: 'assignment3'
      })
      .when('/assignments/4', {
        templateUrl: 'views/assignment4.html',
        controller: 'Assignment4Ctrl',
        controllerAs: 'assignment4'
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
