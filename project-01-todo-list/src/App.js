import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Search from './components/Search';
import Sort from './components/Sort';
import ToggleForm from './components/ToggleForm';

import { reject } from 'lodash';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEdit(item) {
    this.setState({
      itemSelected: item,
      isShowForm: true
    });
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
        />
      </div >
    );
  }
}

export default App;
