import express from 'express';
import { routerTodos } from './routers/todos.js';



const app = express();
const port = 3000;



app.use('/api/todos', routerTodos);

app.listen(port, () => {
    console.log('API Started');
})
