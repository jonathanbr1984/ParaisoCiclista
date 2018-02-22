'use strict';

describe('Component: ParqueosListComponent', function () {

  // load the controller's module
  beforeEach(module('paraisoCiclistaApp'));

  var ParqueosListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ParqueosListComponent = $componentController('parqueos-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
