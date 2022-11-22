const todo = require('../controllers/todo');
const { Router } = require('express');

const todoRoutes = Router();

// prettier-ignore
todoRoutes
    .route('/todo')
        .get(todo.GET_ALL)
        .post(todo.CREATE)

// prettier-ignore
todoRoutes
    .route('/todo/:id')
        .get(todo.GET_BY_ID)
        .patch(todo.UPDATE)
        .delete(todo.DELETE)

module.exports = todoRoutes;
