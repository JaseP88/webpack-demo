import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewPage from './components/NewPage';
import App from './components/App';
import AnotherPage from './components/AnotherPage';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/new-page" component={NewPage} />
            <Route path="/another-page" component={AnotherPage} />
        </div>
    </Router>
    , document.getElementById('root'));