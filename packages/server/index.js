const {APP_SERVER_PORT} = require('./config');

const server = require('./server');

server.start({port: APP_SERVER_PORT}, ({port}) => console.log(`Server is running on http://localhost:${port}`))