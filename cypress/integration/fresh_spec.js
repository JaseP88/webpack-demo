import sinon from 'sinon'
describe('sigh', () => {
    it('does things', () => {
        cy.server()
        function serverStub(path, req) {
            // return new Response(200, {});
            return Promise.resolve(JSON.stringify({
                body: {
                    firstData: 'world',
                    secondData: 'second'
                }
            }));
        }
        // cy.route('POST', '**/aurl.com', JSON.stringify({firstData: 'world'}))
        // cy.route('POST', '**/aurl.com')
        cy.visit('http://localhost:3000/api-page', {
            onLoad(wind) {

            // onBeforeLoad(win) {
            //    

                cy.stub(wind.XMLHttpRequest.prototype, 'send')
                // .withArgs('http://localhost:3000/aurl.com')
               
                    // .callsFake((...args) => {
                    //    serverStub()
                    // }).as('xhr stub');
                .callsFake(() => {
                    return Promise.resolve(JSON.stringify({
                        body: {
                            firstData: 'world',
                            secondData: 'second'
                        }
                    }));
                })

        
            },
        })

        // cy.visit('http://localhost:3000/api-page')
        cy.get('.update_button').click()
        
        expect(true).to.equal(true)
    })
})
