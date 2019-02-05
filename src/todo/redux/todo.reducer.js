import { combineReducers } from 'redux';

import {
  ADD_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  FETCH_TODO_SUCCESS,
  DELETE_TODO,
} from './todo.action';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return [
        ...state,
        action.data,
      ];
    case UPDATE_TODO_SUCCESS:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: action.data.completed };
        }
        return todo;
      });
    case FETCH_TODO_SUCCESS:
      return [...action.data];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const reducers = combineReducers({
  todos,
});

export default reducers;
