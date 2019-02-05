/* eslint-disable no-underscore-dangle */
import React from 'react';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';

import reducers from './redux/todo.reducer';
import epics from './redux/todo.epic';
import TodoList from './containers/todoList.container';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  reducers,
  JSON.parse(preloadedState),
  applyMiddleware(epicMiddleware),
);
epicMiddleware.run(epics);

hydrate(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root'),
);
