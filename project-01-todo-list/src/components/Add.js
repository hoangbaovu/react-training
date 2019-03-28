import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button type="button" className="btn btn-info btn-block">Add Task</button>
      </div>
    );
  }
}

export default Add;