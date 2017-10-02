'use strict';

/**
 * @ngdoc function
 * @name a1App.controller:Assignment5Ctrl
 * @description
 * # Assignment5Ctrl
 * Controller of the a1App
 */
angular.module('a1App')
  .controller('Assignment5Ctrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.show = false;

    var baseEndPoint = 'https://wlmx0qc824.execute-api.us-east-1.amazonaws.com/dev/characters';
    var headers = {};

    $scope.secure = false;

    $scope.getCharacters = function() {
      makeHeaders($scope.secure);
      $http.get(baseEndPoint, headers).then(
        function success(response) {
          $scope.charactersError = '';
          $scope.characters = toArray(response.data);
        },
        function fail(error) {
          $scope.characters = [];
          $scope.charactersError = 'Request Failed.';
        }
      );
    };

    $scope.getComics = function(id) {
      makeHeaders($scope.secure);
      $http.get(baseEndPoint + '/' + id.toString() + '/comics', headers).then(
        function success(response) {
          $scope.comicsError = '';
          $scope.comics = toArray(response.data);
        },
        function fail(error) {
          $scope.comics = [];
          $scope.comicsError = 'Request Failed';
        }
      );
    };

    $scope.getSeries = function(id) {
      makeHeaders($scope.secure);
      $http.get(baseEndPoint + '/' + id.toString() + '/series', headers).then(
        function success(response) {
          console.log(response.data);
          $scope.seriesError = '';
          $scope.series = toArray(response.data);
        },
        function fail(error) {
          $scope.series = [];
          $scope.seriesError = 'Request Failed';
        }
      );
    };

    function makeHeaders(isSecure) {
      if(isSecure) {
        headers = {headers: {'x-api-key': '80cSycaEqPEQxCScdTmgfj5hXszqBG1JHkQaENe0'}};
      }
      else {
        headers = {};
      }
    }

    function toArray(data) {
      var objects = [];
      for(var index = 0; index < data.length; index++) {
        objects.push(data[index]);
      }
      return objects;
    }
  });
