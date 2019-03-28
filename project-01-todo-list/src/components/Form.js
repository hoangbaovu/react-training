import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-offset-7 col-md-5">
          <form method="POST" className="form-inline">
            <div className="form-group">
              <label className="sr-only">label</label>
              <input type="text" className="form-control" placeholder="Task Name" ref="task_name" />
            </div>
            <div className="form-group">
              <label className="sr-only">label</label>
              <select name="ds" id="inputDs" className="form-control" required="required" ref="task_level">
                Small
                <option value={1}>Medium</option>
                <option value={2}>High</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-default">Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;