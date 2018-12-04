import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/components/App';
import AppList from '../../src/components/AppList';
import sinon from 'sinon';
import AsynchronousService from '../../src/services/AsynchronousService';

describe('App component test', function () {
  describe('shallow testing', function () {
    it('should find the title', function () {
      const component = shallow(<App/>);
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

    it('disable button', function () {
      const component = shallow(<App/>);
      let disableButton = component.find('.App-disabled-button');
      expect(disableButton.props().disabled).to.equal(true);
    });

    describe('shallow testing child components', function () {
      it('find API', function () {
        const component = shallow(<App/>);
        const result = component.find(AppList);
        // expect(result).to.equal(true);
        expect(result).to.have.lengthOf(1);
      });

      it('contains API', function () {
        const component = shallow(<App/>);
        const result = component.contains(<AppList/>);
        expect(result).to.equal(true);
      });
    });
  });

  describe('Lifecycle', function () {
    it('componentWillMount', async function () {
      let promise = new Promise((resolve) => {
        resolve(11)
      });

      sinon.stub(AsynchronousService, 'giveYouLater').returns(promise);
      const component = await shallow(<App/>);
      // await component.instance().componentWillMount();

      expect(component.state().number).to.be.equal(11);
      component.unmount();
      sinon.restore();
      // promise.then(() => {
      //   expect(component.state().number).to.be.equal(11);
      // }).catch();
    });

    it('on promise error', async function () {
      let beep = new Promise((resolve, reject) => {
        reject('beep');
      });

      // let beep = Promise.reject('yeep');
      sinon.stub(AsynchronousService, 'giveYouLater').returns(beep);
      const component = await shallow(<App/>, { disableLifecycleMethods: true });
      // await component.instance().componentWillMount();

      // beep.finally(() => {
      expect(component.state().number).to.be.equal(-10);
      //
      // })

      component.unmount();
      sinon.restore();
    });

    // it('wtf', async function () {
    //   const component = shallow(<App/>);
    //   await component.instance().componentWillMount();
    //   expect(true).to.be.equal(true);
    // });

    it('on error', async function () {
      // let beep = new Promise((resolve, reject) => {
      //   reject('beep');
      // });
      sinon.stub(AsynchronousService, 'giveYouLater').rejects("yeller");
      const component = await shallow(<App/>);

      expect(component.state().number).to.equal(-1);

      component.unmount();
      sinon.restore();
    });
  });

  describe('mount testing', function () {
    it('should render the whole DOM?', function () {
      const component = mount(<App/>);
      const result = component.contains(<AppList/>);
      expect(result).to.equal(true);
      // sinon.spy(App.prototype, 'componentDidMount');
      // const wrapper = mount(<App />);
      // expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
    });
  });
});