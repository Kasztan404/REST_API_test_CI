import pkg  from "pactum";

const { spec } = pkg;

describe ('Test suite one', () => {
    it('Check Get response is 200', async ()=> {
        await spec()
        .get('http://httpbin.org/status/200')
        .expectStatus(200)
    });

});