import React from 'react';
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
}

export default WeeklySongListItemFunc;