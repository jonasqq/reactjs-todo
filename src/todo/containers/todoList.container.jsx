// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  fetchTodo,
  addTodo,
  updateTodo,
  filterTodo,
  deleteTodo,
} from '../redux/todo.action';
import Todo from '../components/todo.component';
import TodoAdd from '../components/todoAdd.component';
import TodoPage from '../components/todoPage.component';
import TodoList from '../components/todoList.component';
import TodoFilter from '../components/todoFilter.component';

type Props = {
  todos: Array,
  doFetchTodo: Function,
  doAddTodo: Function,
  doUpdateTodo: Function,
  doFilterTodo: Function,
  doDeleteTodo: Function,
}

const Background = styled.div`
  background: linear-gradient(to bottom, #70e1f5, #ffd194);
  width: 100%;
  height: 100vh;
  position: absolute;
`;
class TodoListContainer extends React.Component<Props> {
  componentDidMount() {
    const { doFetchTodo } = this.props;
    doFetchTodo(1);
  }

  render() {
    const {
      todos,
      doAddTodo,
      doUpdateTodo,
      doFilterTodo,
      doDeleteTodo,
    } = this.props;

    return (
      <Background>
        <TodoPage>
          <TodoList>
            {todos.map(todo => (
              <Todo
                key={`${todo.id}-${todo.title}`}
                title={todo.title}
                completed={todo.completed}
                onToggle={() => doUpdateTodo(todo.userId, {
                  id: todo.id,
                  completed: !todo.completed,
                })}
                onDelete={() => doDeleteTodo(todo.id)}
              />
            ))}
          </TodoList>
          <TodoAdd onAddTodo={doAddTodo} />
          <TodoFilter onFilter={doFilterTodo} />
        </TodoPage>
      </Background>
    );
  }
}

const mapState = state => ({
  todos: state.todos,
});
const mapDispatch = dispatch => ({
  doFetchTodo: userId => dispatch(fetchTodo(userId)),
  doAddTodo: (userId, data) => dispatch(addTodo(userId, data)),
  doUpdateTodo: (userId, data) => dispatch(updateTodo(userId, data)),
  doFilterTodo: (userId, data) => dispatch(filterTodo(userId, data)),
  doDeleteTodo: id => dispatch(deleteTodo(id)),
});
export default connect(mapState, mapDispatch)(TodoListContainer);
