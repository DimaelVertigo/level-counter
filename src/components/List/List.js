import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';

class MyComponent extends Component {
  render() {
    const items = [1,2,3]
    return (
      <div>
        <ListItem/>
      </div>
    );
  }
}

MyComponent.propTypes = {
  list: PropTypes.array
};

export default MyComponent;
