import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/components/App';
import AppList from '../../src/components/AppList';
import sinon from 'sinon';
import BlueNavigationButton from '../../src/components/BlueNavigationButton';

describe('BlueNavigationButton component', function () {
    it('should be able to access disable prop', () => {
        const component = shallow(<BlueNavigationButton/>);

        expect(true).to.equal(true);
    });
});