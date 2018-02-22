'use strict';

describe('Component: ParqueosRemoveComponent', function () {

  // load the controller's module
  beforeEach(module('paraisoCiclistaApp'));

  var ParqueosRemoveComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ParqueosRemoveComponent = $componentController('parqueos-remove', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
