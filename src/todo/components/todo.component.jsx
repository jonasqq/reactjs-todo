// @flow
import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.input`
  position: absolute;
  left: 18px;
  margin-top: 1px;
  left: -20px;
  top: 0px;
`;
const List = styled.li`
  position: relative;
  margin-bottom: 10px;
`;
const Input = styled.input`
  width: 100%;
`;
const Delete = styled.span`
  position: absolute;
  top: 3px;
  right: -28px;
  font-size: 10px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid;
  text-align: center;
  font-weight: bold;
  line-height: 11px;
  cursor: pointer;
`;

type Props = {
  title: String,
  completed: Boolean,
  onToggle: Function,
  onDelete: Function,
}
class Todo extends React.PureComponent<Props> {
  state = {
    title: '',
    showEdit: false,
  }

  inputRef = React.createRef();

  componentDidMount() {
    const { title } = this.props;
    this.setState({ title });
  }

  componentDidUpdate() {
    const { showEdit } = this.state;
    if (showEdit) {
      this.inputRef.current.focus();
    }
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleShowEdit = () => {
    this.setState({ showEdit: true });
  }

  handleHideEdit = () => {
    this.setState({ showEdit: false });
  }

  render() {
    const { completed, onToggle, onDelete } = this.props;
    const { title, showEdit } = this.state;
    return (
      <List
        className={!completed ? 'active' : undefined}
        style={{ textDecoration: !completed ? 'none' : 'line-through' }}
      >
        {
          showEdit ? (
            <Input
              value={title}
              onChange={this.handleTitleChange}
              onBlur={this.handleHideEdit}
              ref={this.inputRef}
            />
          )
            : <div onClick={this.handleShowEdit}>{title}</div>
        }
        <Checkbox type="checkbox" onChange={onToggle} checked={completed} />
        <Delete onClick={onDelete}>x</Delete>
      </List>
    );
  }
}

export default Todo;
