import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// const proxy = require('http-proxy-middleware')


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// module.exports = function(app) {
//   // add other server routes to path array
//   app.use(proxy(['/api' ], { target: 'http://localhost:4000' }));
// }