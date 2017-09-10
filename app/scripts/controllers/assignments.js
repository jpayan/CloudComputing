'use strict';

/**
 * @ngdoc function
 * @name a1App.controller:AssignmentsCtrl
 * @description
 * # AssignmentsCtrl
 * Controller of the a1App
 */
angular.module('a1App')
  .controller('AssignmentsCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.myGrades = {
    x: ['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','E1','E2'],
    y: [94, 100],
    type: 'scatter'
  };

  var dataSet = [$scope.myGrades];
  Plotly.newPlot('performanceChart', dataSet);

  });
