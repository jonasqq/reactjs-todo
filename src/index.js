require('dotenv').config();
const express = require('express');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const webpackConfig = require('../webpack.config')();
const renderReact = require('./utils/renderReact');

const { NODE_ENV, PORT } = process.env;
express.response.renderReact = renderReact;
const app = express();
app.use(express.static('public'));

if (NODE_ENV === 'development') {
  webpackConfig.mode = NODE_ENV;
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    writeToDisk: filePath => /.ejs$/.test(filePath),
  }));
} else {
  app.use(express.static('public'));
}

app.get('/', require('./todo/todo.route'));

app.use((req, res, next) => {
  next({ status: 404, message: 'Route Not Found' });
});
if (NODE_ENV === 'development') {
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => res.status(err.status || 500)
    .json({
      message: err.message,
      stack: err.stack,
    }));
} else {
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => res.status(err.status || 500)
    .json({ message: err.message }));
}

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
