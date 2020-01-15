const {BACKEND_PORT, BACKEND_HOSTNAME} = require('./config');

const server = require('./server');

server.start({port: BACKEND_PORT, hostname: BACKEND_HOSTNAME}, ({port, hostname}) => console.log(`Server is running on http://${hostname}:${port}`))