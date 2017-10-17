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

    var baseEndPoint = 'https://wlmx0qc824.execute-api.us-east-1.amazonaws.com/dev/characters';
    var config = {
      headers: {'x-api-key': '80cSycaEqPEQxCScdTmgfj5hXszqBG1JHkQaENe0'}
    };

    $scope.selected = true;
    $http.get(baseEndPoint, config).then(
      function success(response) {
        $scope.selected = false;
        $scope.characters = response.data;
      },
      function fail(error) {
        console.log(error);
        $scope.common = error;
        $scope.show = true;
      }
    );

    $scope.getCommon = function(idChar1, idChar2) {
      $scope.commonComics = [{title: 'Loading...'}];
      $scope.commonSeries = [{title: 'Loading...'}];
      $scope.show = false;
      var start = new Date();
      config.params = {'char1': idChar1, 'char2': idChar2};
      if (idChar1 != idChar2) {
        $http.get(baseEndPoint + '/common', config)
        .then(function success(response) {
          var data = response.data;
          $scope.commonComics = (data['comics'].length) ? data['comics'] : [{title: 'No comics in common.'}];
          $scope.commonSeries = (data['series'].length) ? data['series'] : [{title: 'No series in common.'}];
          calculateLatency(start);
        }).catch(function(error) {
          console.log(error);
          $scope.error = error;
          $scope.show = true;
        });
      }
    }

    function calculateLatency(start) {
      var end = new Date();
      var latency = end - start;
      $scope.latency = latency + " ms";
    }
  });


