export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FETCH_TODO = 'FETCH_TODO';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILED = 'FETCH_TODO_FAILED';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function fetchTodo(userId) {
  return { type: FETCH_TODO, userId };
}

export function fetchTodoSucces(data) {
  return { type: FETCH_TODO_SUCCESS, data };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
