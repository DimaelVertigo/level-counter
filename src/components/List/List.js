import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

class List extends Component {
  render() {
    const list = [1, 2, 3];
    return (
      <div>
        {list.map((item, index) => <ListItem item={item} key={index + item} />)}
      </div>
    );
  }
}

export default List;
