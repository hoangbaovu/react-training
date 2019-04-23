import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import ToggleForm from './ToggleForm';

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
    let { orderBy, orderDir } = this.props;

    return (
      <div className="row">
        <Search onClickGo={this.props.onClickSearchGo} />
        <Sort
          onClickSort={this.props.onClickSort}
          orderBy={orderBy}
          orderDir={orderDir}
        />
        <ToggleForm />
      </div>
    );
  }
}

export default Control;