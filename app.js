const express = require('express');
const app = express();
const port = 3000;
var path = require("path");

const isLocalEnv = process.env.NODE_ENV === 'development';

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'build')));


if (isLocalEnv) {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const middlewareOptions = {
    publicPath: '/dist',
  };
  app.use(webpackDevMiddleware(webpack(require('./webpack.dev')), middlewareOptions));
}



app.get('/*', (req, res) => {
  const bundleJsPath = isLocalEnv ? '/dist/bundle.js' : '/bundle.js';
  res.render('page', { bundleJsPath });
});

app.listen(port, () => {
  console.log(path.resolve(__dirname));
  console.log(path.resolve(__dirname, '/build'));
  console.log(path.resolve(__dirname, 'build'));
  console.log(`Example app listening on port ${port}!`)
});