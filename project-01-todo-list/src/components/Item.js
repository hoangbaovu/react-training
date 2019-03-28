import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  showElementLevel(level) {
    let elmLevel = <span className="label label-default">Low</span>;
    if (level === 1) {
      elmLevel = <span className="label label-info">Medium</span>;
    }
    if (level === 2) {
      elmLevel = <span className="label label-danger">High</span>;
    }
    return elmLevel;
  };

  render() {
    const { item, index } = this.props;
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{item.name}</td>
        <td className="text-center">{this.showElementLevel(item.level)}</td>
        <td>
          <button type="button" className="btn btn-warning">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Item;