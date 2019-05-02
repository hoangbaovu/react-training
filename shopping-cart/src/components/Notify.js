import React from 'react';
import { connect } from 'react-redux'

function Notify(props) {
  let { notify } = props;
  return (
    <div className="alert alert-success" role="alert" id="mnotification">{notify}</div>
  )
}

const mapStateToProps = state => {
  return {
    notify: state.notify
  }
}

export default connect(mapStateToProps, null)(Notify);