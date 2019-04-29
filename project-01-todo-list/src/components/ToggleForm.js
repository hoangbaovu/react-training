import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionToggleForm } from '../actions/index';

class ToggleForm extends Component {
  handleToggle = () => {
    this.props.handleToggle();
  }

  render() {
    const { isShowForm } = this.props;

    let btnName = "Open Form";
    let btnClass = "btn-info";
    if (isShowForm === true) {
      btnName = "Close Form";
      btnClass = "btn-success";
    }

    return (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button onClick={this.handleToggle} type="button" className={`btn btn-block ${btnClass}`}>{btnName}</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isShowForm: state.isShowForm
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleToggle: () => {
      dispatch(actionToggleForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleForm);