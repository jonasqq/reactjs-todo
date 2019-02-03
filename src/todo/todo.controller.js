
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import TodoList from './containers/todoList.container';
import reducers from './redux/todo.reducer';
import epics from './redux/todo.epic';

module.exports = {
  get: (req, res) => {
    const epicMiddleware = createEpicMiddleware();
    const store = createStore(
      reducers,
      applyMiddleware(epicMiddleware),
    );
    epicMiddleware.run(epics);
    res.renderReact('todo', TodoList, store);
  },
};
