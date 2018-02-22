'use strict';

describe('Service: parqueos', function () {

  // load the service's module
  beforeEach(module('paraisoCiclistaApp'));

  // instantiate service
  var parqueos;
  beforeEach(inject(function (_parqueos_) {
    parqueos = _parqueos_;
  }));

  it('should do something', function () {
    expect(!!parqueos).to.be.true;
  });

});
