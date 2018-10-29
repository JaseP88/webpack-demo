import AppList from '../../src/AppList';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import RandomWordService from '../../src/RandomWordService';

describe('AppList', function () {
  let component;
  let randomWordService;

  before(function () {
    randomWordService = RandomWordService;
  });

  afterEach(function () {
    sinon.restore();
    component.unmount();

  });

  it('should call randomWordService', function () {
    const spy = sinon.spy(randomWordService, 'randomWord');
    component = mount(<AppList/>);
    component.setState({ x: 1 });

    expect(spy).to.have.been.calledWith('1');
  });

  it('should call randomWordServiceAgain if x equals 0', function () {
    const spy = sinon.spy(randomWordService, 'randomWord');
    component = mount(<AppList/>);
    component.setState({ x: 0 });

    expect(spy).to.have.been.calledWith('0');
  });
});
