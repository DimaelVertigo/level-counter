import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <div>
        {item}
      </div>
    );
  }
}

export default ListItem;
