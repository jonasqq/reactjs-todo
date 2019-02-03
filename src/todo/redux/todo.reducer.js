import { combineReducers } from 'redux';

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  FETCH_TODO_SUCCESS,
} from './todo.action';

const { SHOW_ALL } = VisibilityFilters;

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case FETCH_TODO_SUCCESS:
      return [...action.data];
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const reducers = combineReducers({
  todos,
  visibilityFilter,
});

export default reducers;
