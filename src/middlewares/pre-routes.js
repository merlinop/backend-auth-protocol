const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const AppRoutes = require('../routes/router');

const PreRoute = (app) => {
  if (!app) throw new Error('PreRoute expected an app as argument');

  // prettier-ignore
  app
    .use(cors())
    .use(express.json())
    .use(helmet())
    .use(morgan('tiny'))
    .use(AppRoutes)
};

module.exports = PreRoute;
