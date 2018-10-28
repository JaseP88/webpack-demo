import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/App';
import AppList from '../../src/AppList';
import sinon from 'sinon';

// import jsdom from 'jsdom'
// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
// global.document = doc
// global.window = doc.defaultView



describe('App component test', function () {
  describe('shallow testing', function () {
    it('should find the title', function () {
      const component = shallow(<App />);
      const result = component.find('.App-title');
      expect(result.text()).to.equal('Welcome to React');
    });

    it('return old state', function () {
      const component = shallow(<App />);
      expect(component.state().name).to.equal('old');
    });

    it('when button is clicked update state', function () {
      const component = shallow(<App />);
      component.find('.App-button').simulate('click');
      expect(component.state().name).to.equal('new');
    });

    describe('shallow testing child components', function () {
      it('find API', function () {
        const component = shallow(<App />);
        const result = component.find(AppList);
        // expect(result).to.equal(true);
        expect(result).to.have.lengthOf(1);;
      });

      it('contains API', function () {
        const component = shallow(<App />);
        const result = component.contains(<AppList />);
        expect(result).to.equal(true);
      });
    });
  });

  describe('mount testing', function () {
    it('should render the whole DOM?', function () {
      const component = mount(<App />);
      const result = component.contains(<AppList />);
      expect(result).to.equal(true);
      // sinon.spy(App.prototype, 'componentDidMount');
      // const wrapper = mount(<App />);
      // expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
    });
  });
});