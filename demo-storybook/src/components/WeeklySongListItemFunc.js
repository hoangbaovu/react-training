import React from 'react';
import PropTypes from 'prop-types';
import './WeeklySongListItem.css';

function WeeklySongListItemFunc(props) {
  const { order, title, singer, viewCount } = props;
  return (
    <div className="WeeklySongListItem">
      <div className="order">{ order }</div>
      <div className="info">
        <p className="title">{ title }</p>
        <p className="singer">{ singer }</p>
      </div>
      <div className="view-count">{viewCount.toLocaleString()}</div>
    </div>
  );
};

WeeklySongListItemFunc.defaultProps = {
  viewCount: 0
};

WeeklySongListItemFunc.propTypes = {
  order: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  singer: PropTypes.string.isRequired,
  /** View count */
  viewCount: PropTypes.number
};

export default WeeklySongListItemFunc;