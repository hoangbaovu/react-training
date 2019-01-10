import React, { Component } from "react";
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    // const item = this.props.item;
    const { item } = this.props; // Destructuring
    let className = 'TodoItem';
    if (item.isComplete) {
      className += ' TodoItem-complete';
    }
    return(
      <div className={className}>
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;