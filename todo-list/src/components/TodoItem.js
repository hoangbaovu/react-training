import React, { Component } from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';

import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

import './TodoItem.css';

class TodoItem extends Component {

  render() {
    // const item = this.props.item;
    const { item, onClick } = this.props; // Destructuring
    let url = checkImg;

    if (item.isComplete) {
      url = checkCompleteImg;
    }

    return(
      <div className={classNames('TodoItem', {
        'TodoItem-complete' : item.isComplete
      })}>
        <img onClick={onClick} src={url} width={32} height={32} alt="" />

        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    isComplete: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func
}

export default TodoItem;