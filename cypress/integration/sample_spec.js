import { startPolly, stopPolly } from '../pollyHelper'
import { Polly } from '@pollyjs/core';
import XHRAdapter from '@pollyjs/adapter-xhr';
import RESTPersister from '@pollyjs/persister-rest';
import LocalStoragePersister from '@pollyjs/persister-local-storage';

Polly.register(XHRAdapter);
Polly.register(RESTPersister);
Polly.register(LocalStoragePersister);
describe('My First Test', function () {
    let polly;

    before(() => {
        cy.visit("http://localhost:3000/api-page", {
            onBeforeLoad: win => {
                polly = startPolly(win);
            }
        });
    });

    it('should', () => {
        const { server } = polly
        server.post('aurl.com').intercept((req, res) => {
            if(req.body.includes('something')) {
                res.json({firstData: 'pep'})
            } else if(req.body.includes('different')) {
                res.json({secondData: 'yerp'})
            }
        });
        cy.get('.update_button').click()
        expect(true).to.equal(true)
    })

    after(() => {
        stopPolly(polly);
    });
})