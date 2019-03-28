import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.props.onClickAdd();
  }

  render() {
    return (
      <div className="row">
        <Search />
        <Sort />
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <button onClick={this.handleAdd} type="button" className="btn btn-info btn-block">Add Task</button>
        </div>
      </div>
    );
  }
}

export default Control;