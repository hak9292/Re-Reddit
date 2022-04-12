const configs = {
    development: {
      SERVER_URI: 'http://localhost:4000',
    },
    production: {
      SERVER_URI: 'https://re-reddit-app.herokuapp.com',
    },
  };
  
  module.exports = configs[process.env.NODE_ENV];