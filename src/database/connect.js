const mongoose = require('mongoose');
const { MONGO_URL } = require('../config/envConfig');

const mongoConnect = async () => {
  mongoose.connect(
    MONGO_URL,
    {
      keepAlive: true,
      connectTimeoutMS: 60000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) return console.log(error.message);

      console.log('[database]: Databse connected');
    }
  );
};

module.exports = mongoConnect;
