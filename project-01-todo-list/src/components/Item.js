import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionOpenForm, actionDeleteItem } from '../actions/index';
class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(item) {
    this.props.editItem();
  }

  handleDelete(id) {
    this.props.deleteItem(id);
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
          <button onClick={() => this.handleEdit(item)} type="button" className="btn btn-warning">Edit</button>
          <button onClick={() => this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
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
    editItem: () => {
      dispatch(actionOpenForm());
    },
    deleteItem: id => {
      dispatch(actionDeleteItem(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);