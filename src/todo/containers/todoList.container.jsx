// @flow
import React from 'react';
import { connect } from 'react-redux';
import { FETCH_TODO } from '../redux/todo.action';
import TODO from '../components/todo.component';

type Props = {
  todos: Array,
  fetchTodo: Function,
}
class TodoList extends React.Component<Props> {
  componentDidMount() {
    const { fetchTodo } = this.props;
    fetchTodo(1);
  }

  render() {
    const { todos } = this.props;
    return (
      <>
        <ul>
          {todos.map(todo => <TODO key={todo.id} title={todo.title} active={todo.completed} />)}
        </ul>
      </>
    );
  }
}

const mapState = state => ({
  todos: state.todos,
  filter: state.visibilityFilter,
});
const mapDispatch = dispatch => ({
  fetchTodo: () => dispatch({ type: FETCH_TODO }),
});
export default connect(mapState, mapDispatch)(TodoList);
