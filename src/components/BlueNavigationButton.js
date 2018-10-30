import React from 'react';
import Button from '@material-ui/core/Button';import {
    withRouter
  } from 'react-router-dom'


const BlueNavigationButton = (props) => {
    return (
        <Button variant="contained" color="primary" onClick={() => props.history.push('/another-page')}>
            Nav Button
        </Button>
    );
};

export default withRouter(BlueNavigationButton);