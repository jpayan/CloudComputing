'use strict';

/**
 * @ngdoc function
 * @name a1App.controller:Assignment4Ctrl
 * @description
 * # Assignment4Ctrl
 * Controller of the a1App
 */
angular.module('a1App')
  .controller('Assignment4Ctrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.show = false;

    var baseEndPoint = 'https://wlmx0qc824.execute-api.us-east-1.amazonaws.com/dev/characters'
    var characters = [];
    var common = [];

    $http.get(baseEndPoint).then(
      function success(response) {
        characters = response.data;
        $scope.characters = characters;
      },
      function fail(error) {
        console.log(error);
      }
    );

    $scope.getCommonComics = function(idChar1, idChar2) {
      var comicsChar1 = [];
      var comicsChar2 = [];
      var start = new Date();

      if (idChar1 != idChar2) {
        return Promise.join(
          $http.get(baseEndPoint + '/' + idChar1.toString() + '/comics'),
          $http.get(baseEndPoint + '/' + idChar2.toString() + '/comics'),
          function(resultA, resultB) {
            comicsChar1 = resultA.data;
            comicsChar2 = resultB.data;
            intersect(comicsChar1, comicsChar2);
            calculateLatency(start);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      else {
        $http.get(baseEndPoint + '/' + idChar1.toString() + '/comics')
          .then(function success(response) {
              comicsChar1 = response.data;
              writeResults(comicsChar1);
              calculateLatency(start);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    $scope.getCommonSeries = function(idChar1, idChar2) {
      var seriesChar1 = [];
      var seriesChar2 = [];
      var start = new Date();

      if (idChar1 != idChar2) {
        return Promise.join(
          $http.get(baseEndPoint + '/' + idChar1.toString() + '/series'),
          $http.get(baseEndPoint + '/' + idChar2.toString() + '/series'),
          function(resultA, resultB) {
            seriesChar1 = resultA.data;
            seriesChar2 = resultB.data;
            intersect(seriesChar1, seriesChar2);
            calculateLatency(start);
          })
          .catch(function (error) {
            console.log(error);
            $scope.common
          });
      }
      else {
        $http.get(baseEndPoint + '/' + idChar1.toString() + '/series')
          .then(function success(response) {
            seriesChar1 = response.data;
            writeResults(seriesChar1);
            calculateLatency(start);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    function intersect(array1, array2) {
      var intersection = [];
      while( array1.length > 0 && array2.length > 0 ) {
        if (array1[0] < array2[0] ) {
          array1.shift();
        }
        else if (array1[0] > array2[0] ) {
          array2.shift();
        }
        else {
          intersection.push(array1.shift());
          array2.shift();
        }
      }
      writeResults(intersection);
    }

    function writeResults(results) {
      common = [];
      for(var index = 0; index < results.length; index++) {
        common.push(results[index].title);
      }
      $scope.common = common;
      $scope.show = true;
    }

    function calculateLatency(start) {
      var end = new Date();
      var latency = end - start;
      $scope.latency = latency + " ms";
    }
  });


