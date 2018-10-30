import React, { Component } from 'react';

const NavigationHOC = (WrappedComponent) => {
    return class extends Component {
        render() {
            return(
                <WrappedComponent />
            );
        };
    }
};

export default NavigationHOC;