import express from 'express';
import controller from './todo.controller';

const routes = express();
routes.route('/')
  .get(controller.get);

module.exports = routes;
