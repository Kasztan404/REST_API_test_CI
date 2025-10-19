import express from 'express';
import { routerTodos } from './routers/todos.js';

const app = express();

app.use('/api/todos', routerTodos);

export const appServer = app;