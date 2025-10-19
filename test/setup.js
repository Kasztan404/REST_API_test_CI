import pactum from 'pactum'
import { appServer } from '../app.js';

let server;
const port = 3000;

before( async () => {
    server = appServer.listen(port);
    pactum.request.setBaseUrl(`http://localhost:${port}`);
});

after ( async () => {
    server.close();
});
