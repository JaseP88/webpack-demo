// const { assert } = require('chai');
const { expect } = require('chai');
// import { assert, expect } from 'chai';


describe('Diff Test', function() {
  describe('same test but diff', function() {
    it('should return -1 when the value is not present', function() {
      const result = [1, 2, 3].indexOf(4);
      // assert.equal([1, 2, 3].indexOf(4), -1);
      expect(result).to.equal(-1);
    });
  });
});
