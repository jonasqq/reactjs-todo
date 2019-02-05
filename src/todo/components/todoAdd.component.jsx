import React from 'react';
import styled from 'styled-components';

type Props = {
  onAddTodo: Function,
}

const Form = styled.form`
  position: absolute;
  top: 30px;
  width: 90%;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  font-size: 30px;
  border-bottom: 1px solid #eee;
`;

class TodoAdd extends React.PureComponent<Props> {
  state = {
    title: '',
  }

  inputRef = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const { onAddTodo } = this.props;
    const { title } = this.state;
    this.inputRef.current.value = '';
    onAddTodo(1, { title });
  }

  handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input ref={this.inputRef} name="title" value={title} onChange={this.handleChange} placeholder="Add To Do" autoComplete="off" />
      </Form>
    );
  }
}

export default TodoAdd;
