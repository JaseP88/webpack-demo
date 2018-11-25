import { Polly } from "@pollyjs/core";
import RESTPersister from "@pollyjs/persister-rest";
import XHRAdapter from "cypress-polly-xhr-adapter";
import LocalStoragePersister from '@pollyjs/persister-local-storage';

export const startPolly = (_win, _name) => {
    XHRAdapter.setWindow(_win || window);

    const name = _name || Cypress.spec.name.replace(".js", "");
    return new Polly(name, {
        adapters: [XHRAdapter],
        persister: LocalStoragePersister,
        logging: true,
        recordFailedRequests: true,
        matchRequestsBy: {
            headers: false,
            order: false
        }
    });
};

export const stopPolly = polly => {
    if (!polly) throw new Error("Polly not initialised");
    cy.wrap(polly).invoke("stop");
};