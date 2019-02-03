import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { FETCH_TODO, fetchTodoSucces } from './todo.action';

const getEpic = $action => $action.pipe(
  ofType(FETCH_TODO),
  mergeMap(action => ajax.getJSON(`https://jsonplaceholder.typicode.com/users/${action.userId}/todos`).pipe(
    map(response => fetchTodoSucces(response)),
  )),
);

const epics = combineEpics(getEpic);

export default epics;
