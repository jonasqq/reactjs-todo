const express = require('express');
const controller = require('./todo.controller');

const routes = express();
routes.route('/')
  .get(controller.get);

module.exports = routes;
