const { getHelloMessage } = require('./index');

const assert = require('assert');

describe('getHelloMessage', () => {
  it('should return "Hello, world!"', () => {
    const actualResult = getHelloMessage();
    assert.equal('Hello, world!', actualResult);
  });
});
