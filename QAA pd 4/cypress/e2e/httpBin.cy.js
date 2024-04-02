describe('testing httpbin API', () => {
    it('httpbin has status 200', () => {
        cy.request('https://httpbin.org/status/200').then(response => {
            const status = response.status;
            assert.equal(200, status); 
        });
    });
});


describe('testing httpbin API', () => {
    it('httpbin get request returns correct data', () => {
        cy.request('GET', 'https://httpbin.org/get').then(response => {
            const body = response.body;
            expect(body).to.be.an('object');
            expect(body).to.include.keys('url');
        });
    });
});


describe('testing httpbin API', () => {
    it('returning cookie data', () => {
        cy.request('GET', 'https://httpbin.org/cookies').then(response => {
            expect(response.status).to.be(200);
            expect(response.body.cookies).to.not.be.empty;
        });
    });
});

describe('testing httpbin API', () => {
    it('httpbin post method returns correct data', () => {
        cy.request('POST', 'https://httpbin.org/post').then(response => {
            const status = response.status;
            assert.equal(200, status); 
        });
    });
});

describe('testing httpbin API', () => {
    it('redirection to google.com', () => {
        cy.request('POST', 'https://httpbin.org/redirect-to?url=https://google.com').then(response => {
            expect(response.status).to.eq(200);
            const incorrectURL = 'https://www.youtube.com/';
            expect(response.redirectedToUrl).to.not.eq(incorrectURL);

        });
    });
});

describe('testing httpbin API', () => {
    it('returning json data', () => {
        cy.request('GET', 'https://httpbin.org/json', response => {
            expect(response.status).to.eq(200);
            expect(response.headers['Content-Type']).to.contain('application/json');
        })
    });
});
    
describe('testing httpbin API', ()=> {
    it('user authorisation as an admin', () => {
        cy.request('GET', 'https://httpbin.org/basic-auth/admin/admin').then(response  =>{
            failOnStatusCode: false;
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('authenticated').to.be.true;
            expect(response.body).to.have.property('user').to.eq('admin');
        
        });
            
        });
    });

    describe('testing httpbin API', () => {
        it('testing header', () => {
            cy.request('GET', 'https://httpbin.org/headers').then(response => {
                expect(response.status).to.equal(200);
                expect(response.body).to.have.property("headers");
            });
        });
    });

describe('testing httpbin API', () => {
    it('httpbin return a delayed response after 10 seconds', () => {
        cy.request({ method: 'PATCH', url: 'https://httpbin.org/delay/10', timeout: 15000 }).then(response => {
            expect(response.status).to.equal(200);

        });
    });
});

describe('testing httpbin API', () => {
    it('deleting anything that passed in request data', () => {
        const request = {
            key1: 'value1',
            key2: 'value2'
        };
        cy.request({method:'DELETE', url:'https://httpbin.org/anything', body: request}).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.data).to.eql(request);

        });
    });
});
    