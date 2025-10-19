import express from 'express'

const router = express.Router();

let todos = [
    { id: 1, description: "Naucz się expressJS", done: false },
    { id: 2, description: "Naucz się PactumJS", done: false }
]


router.get('/', (req, res) => {
    res.json(todos);
});

export const routerTodos = router;