import pkg  from "pactum";
import assert from 'assert';

const { spec } = pkg;

describe ('Test suite for TODOS GET', () => {
    it('Check Get response is 200 and items have correct shape', async ()=> {
        const todos = await spec()
        .get('/api/todos')
        .expectStatus(200)
        .returns();

        assert.ok(Array.isArray(todos.json), 'response should be an array')

        for (const todo of todos.json){
            assert.strictEqual(typeof todo.id, 'number', 'id should be a number');
            assert.strictEqual(typeof todo.description, 'string', 'description should be a string');
            assert.ok(todo.description.trim().length > 0, 'description should not be empty');
            assert.strictEqual(typeof todo.done, 'boolean', 'done should be boolean');
        }
    });

});