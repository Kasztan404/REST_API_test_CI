import { appServer } from './app.js';

const port = 3000;

appServer.listen(port, () => {
    console.log('API Started');
})
