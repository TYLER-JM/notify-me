const library = require('../lib/testMe');
const chai = require('chai');
const assert = chai.assert;

describe('First Test', function() {
  it('should return x + 2', function() {
    let val = library.testMe(3);

    assert.equal(val, 5);
  });
});