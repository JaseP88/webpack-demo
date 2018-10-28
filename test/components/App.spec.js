import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/App';

describe('App component test', function () {
  describe('shallow testing', function () {
    it('should find the title', function () {
      const component = shallow(<App />);
      const result = component.find('.App-title');
      expect(result.text()).to.equal('Welcome to React');
    });

    it('return old state', function () {
      const component = shallow(<App/>);
      expect(component.state().name).to.equal('old');
    });

    it('when button is clicked update state', function () {
      const component = shallow(<App/>);
      component.find('.App-button').simulate('click');
      expect(component.state().name).to.equal('new');
    });
  });
});