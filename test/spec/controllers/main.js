'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('simpleTodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should contain no items at the start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function () {
    scope.todo = 'Test data';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should add and then remove an item from the list', function () {
    scope.todo = 'Test data';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });
});
