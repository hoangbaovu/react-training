import React, { Component } from "react";
import classNames from 'classnames';

import './TodoItem.css';

class TodoItem extends Component {

  render() {
    // const item = this.props.item;
    const { item, onClick } = this.props; // Destructuring

    return(
      <div onClick={onClick} className={classNames('TodoItem', {
        'TodoItem-complete' : isComplete
      })}>
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;