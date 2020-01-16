const DATABASE_PORT = process.env.DATABASE_PORT || 27017;

module.exports = {
  APP_CLIENT_PORT: process.env.APP_CLIENT_PORT || 4000,
  APP_SERVER_PORT: process.env.APP_SERVER_PORT || 8000,
  DATABASE_PORT,
  API_HOST: process.env.API_HOST || 'http://localhost:3000',
  DATABASE_URL: `mongodb://localhost:${DATABASE_PORT}/server`,
};
