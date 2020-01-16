const mongoose = require('mongoose');

const server = require('./src/server');

const {APP_SERVER_PORT, DATABASE_URL, mongooseConfig} = require('./src/config');

mongoose.connect(DATABASE_URL, mongooseConfig)
  .catch(e => console.log(e));

server.start({port: APP_SERVER_PORT}, () => {
  console.log(`Server is up!`);
}).catch(e => console.log(e));
