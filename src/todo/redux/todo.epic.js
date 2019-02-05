import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import {
  FETCH_TODO,
  fetchTodoSucces,
  ADD_TODO,
  addTodoSuccess,
  UPDATE_TODO,
  updateTodoSuccess,
  FILTER_TODO,
} from './todo.action';

const getEpic = $action => $action.pipe(
  ofType(FETCH_TODO),
  mergeMap(action => ajax.getJSON(`https://jsonplaceholder.typicode.com/users/${action.userId}/todos`).pipe(
    map(response => fetchTodoSucces(response)),
  )),
);
const filterEpic = $action => $action.pipe(
  ofType(FILTER_TODO),
  mergeMap(({ userId, filter }) => {
    let url = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;
    if (filter.completed !== 'show_all') {
      url += `?completed=${filter.completed}`;
    }
    return ajax.getJSON(url).pipe(
      map(response => fetchTodoSucces(response)),
    );
  }),
);

const addEpic = $action => $action.pipe(
  ofType(ADD_TODO),
  mergeMap(action => ajax.post(
    'https://jsonplaceholder.typicode.com/todos',
    { title: action.data.title, userId: action.userId, completed: false },
    { 'Content-Type': 'application/json' },
  ).pipe(
    map(response => addTodoSuccess(response)),
  )),
);
const updateEpic = $action => $action.pipe(
  ofType(UPDATE_TODO),
  mergeMap(action => ajax.patch(
    `https://jsonplaceholder.typicode.com/todos/${action.data.id}`,
    { completed: action.data.completed },
    { 'Content-Type': 'application/json' },
  ).pipe(
    map(response => updateTodoSuccess(action.data.id, response)),
  )),
);

const epics = combineEpics(getEpic, filterEpic, addEpic, updateEpic);

export default epics;
