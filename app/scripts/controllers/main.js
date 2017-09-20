'use strict';

/**
 * @ngdoc function
 * @name a1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the a1App
 */
angular.module('a1App')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.hideVersion = true;
    var url = 'https://w940l71e8c.execute-api.us-east-1.amazonaws.com/dev/version';

    $http.get(url).then( function (response) {
      $scope.version = response.data;
      $scope.hideVersion = false;
    }, function (error) {
      console.log(error);
    });
  });
