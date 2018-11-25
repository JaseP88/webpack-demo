import React, { Component } from 'react';
import { Polly } from '@pollyjs/core';
import XHRAdapter from '@pollyjs/adapter-xhr';
import RESTPersister from '@pollyjs/persister-rest';
import LocalStoragePersister from '@pollyjs/persister-local-storage';

const request = require('superagent');

Polly.register(XHRAdapter);
Polly.register(RESTPersister);
Polly.register(LocalStoragePersister);
class StubbedApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstData: 'aaaa',
            secondData: 'bbbb'
        }
        // const polly = new Polly('API stub', {
        //     adapters: ['xhr'],
        //     persister: 'local-storage'
        // });
        // const { server } = polly;

        // /* Intercept all Google Analytic requests and respond with a 200 */
        // server
        //     .post('http://localhost:3000/aurl.com')
        //     .intercept((req, res) => res.json({firstData: 'uep', secondData: 'nerp'}));

    }

    updateMe = () => {
        request.post('aurl.com').send({
            something: 'something'
        }).then(result => {
            this.setState({ firstData: result.body.firstData })
        })

        request.post('aurl.com').send({
            different: 'different'
        }).then(result => {
            this.setState({ secondData: result.body.secondData })
        })
    }

    render() {
        return (
            <div>
                <button className="update_button" onClick={this.updateMe}>click me</button>
                <h1 className="first_header">{this.state.firstData}</h1>
                <h1 className="second">{this.state.secondData}</h1>
            </div>
        );
    }
}

export default StubbedApi;