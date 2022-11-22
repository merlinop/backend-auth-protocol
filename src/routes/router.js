const { Router } = require('express');
const todoRoute = require('./todo.routes');

const AppRoutes = Router();

AppRoutes.route('/').get((req, res) => {
  res.status(200).json({ msg: 'Root route hit', status: 200, data: null });
});

// prettier-ignore
AppRoutes
    .use(todoRoute)

module.exports = AppRoutes;
