// const { assert } = require('chai');
import { assert } from 'chai';

describe('third Test', function() {
  describe('the third', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
