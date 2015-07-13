'use strict';

/**
 * @ngdoc function
 * @name simpleTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleTodoApp
 */
angular.module('simpleTodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
