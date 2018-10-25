// const { assert } = require('chai');
import { assert } from 'chai';

describe('dont call me bro', function() {
  describe('never call me', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
