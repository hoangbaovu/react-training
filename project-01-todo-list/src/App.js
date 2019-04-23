import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Search from './components/Search';
import Sort from './components/Sort';
import ToggleForm from './components/ToggleForm';

import { remove, reject } from 'lodash';

// import tasks from './mocks/tasks';

const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isShowForm: false,
      orderBy: 'name',
      orderDir: 'asc',
      itemSelected: null
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEdit(item) {
    this.setState({
      itemSelected: item,
      isShowForm: true
    });
  }

  handleDelete(id) {
    let items = this.state.items;
    remove(items, (item) => {
      return item.id === id;
    });
    this.setState({
      items: items
    });

    localStorage.setItem('task', JSON.stringify(items));
  }

  handleSubmit(item) {
    let { items } = this.state;
    let id = null;

    if (item.id !== '') { //edit
      items = reject(items, { id: item.id });
      id = item.id;
    } else {
      id = uuidv4();
    }

    items.push({
      id,
      name: item.name,
      level: +item.level
    });

    this.setState({
      items: items,
      isShowForm: false
    })

    localStorage.setItem('task', JSON.stringify(items));
  }

  render() {
    // let items = [];
    let { itemSelected } = this.state;

    return (
      <div>
        <Title />
        <div className="row">
          <Search />
          <Sort />
          <ToggleForm />
        </div>
        <Form itemSelected={itemSelected} onClickSubmit={this.handleSubmit} />
        <List
          onClickEdit={this.handleEdit}
          onClickDelete={this.handleDelete}
        />
      </div >
    );
  }
}

export default App;
