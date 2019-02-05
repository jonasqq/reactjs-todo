import React from 'react';
import styled from 'styled-components';

type Props = {
  onFilter: Function,
}

const Select = styled.select`
  position: absolute;
  bottom: 10px;
`;

class TodoFilter extends React.PureComponent<Props> {
  state = {
    completed: 'show_all',
  }

  handleChange = (event) => {
    const { onFilter } = this.props;
    const state = {
      [event.target.name]: event.target.value,
    };
    this.setState(state);
    onFilter(1, state);
  }

  render() {
    const { completed } = this.state;
    return (
      <Select name="completed" defaultValue={completed} onChange={this.handleChange}>
        <option value="show_all">Show All</option>
        <option value="false">Active</option>
        <option value="true">Completed</option>
      </Select>
    );
  }
}

export default TodoFilter;
