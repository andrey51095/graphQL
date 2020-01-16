const mongoose = require('mongoose');

const {APP_SERVER_PORT, DATABASE_URL} = require('./config');

const server = require('./server');

mongoose.connect(DATABASE_URL, {
  autoIndex: false,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on('open', () => {
  server.start({port: APP_SERVER_PORT}, () => console.log(`Server is up!`));
});
