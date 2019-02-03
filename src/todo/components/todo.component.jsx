// @flow
import React from 'react';

type Props = {
  title: String,
  active: Boolean,
}
class TODO extends React.PureComponent<Props> {
  render() {
    const { title, active } = this.props;
    return (
      <li className={active ? 'active' : undefined}>
        {title}
      </li>
    );
  }
}

export default TODO;
