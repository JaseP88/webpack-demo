import { assert, expect } from 'chai';
import sinon from 'sinon';
import MyHelloGuy from '../src/MyHelloGuy';


describe('myTestyGuy', function() {
  const myHelloGuy = new MyHelloGuy();

  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      const result = [1, 2, 3].indexOf(4);
      expect(result).to.equal(-1)
    });
  });

  describe('testing sinon', function () {
    describe('stubbing', function () {
      it('should return specified values', function () {
        sinon.stub(myHelloGuy, 'hello').onFirstCall().returns('ovveride the return');

        const result = myHelloGuy.hello('jrock');
        expect(result).to.equal('ovveride the return');
      })
    })
  })
});
