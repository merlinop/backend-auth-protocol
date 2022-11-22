const cors = require('cors');
const express = require('express');
const PreRoute = require('./middlewares/pre-routes');
const { PORT } = require('./config/envConfig');
const mongoConnect = require('./database/connect');

const app = express();
PreRoute(app);
mongoConnect();

app.listen(PORT | 8000, (error) => {
  if (error) return console.log(error);

  // ======= if no error -->
  console.log(`[server]: Server started...`);
});

module.exports = app;
