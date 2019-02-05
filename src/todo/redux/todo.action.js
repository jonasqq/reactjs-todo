export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILED = 'ADD_TODO_FAILED';
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAILED = 'UPDATE_TODO_FAILED';
export const FETCH_TODO = 'FETCH_TODO';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILED = 'FETCH_TODO_FAILED';
export const FILTER_TODO = 'FILTER_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(userId, data) {
  return { type: ADD_TODO, userId, data };
}

export function addTodoSuccess(data) {
  return { type: ADD_TODO_SUCCESS, data: data.response };
}

export function updateTodo(userId, data) {
  return {
    type: UPDATE_TODO,
    userId,
    data,
  };
}

export function updateTodoSuccess(id, data) {
  return { type: UPDATE_TODO_SUCCESS, id, data: data.response };
}

export function fetchTodo(userId) {
  return { type: FETCH_TODO, userId };
}

export function fetchTodoSucces(data) {
  return { type: FETCH_TODO_SUCCESS, data };
}

export function filterTodo(userId, filter) {
  return { type: FILTER_TODO, userId, filter };
}

export function filterTodoSuccess(data) {
  return { type: FILTER_TODO, data };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id };
}
