import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import { filter, includes, orderBy as funcOrderBy, remove, reject } from 'lodash';

import tasks from './mocks/tasks';

const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: tasks,
      isShowForm: false,
      strSearch: '',
      orderBy: 'name',
      orderDir: 'asc',
      itemSelected: null
    };

    this.handleToogleForm = this.handleToogleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSort(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    });
  }

  handleToogleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm,
      itemSelected: null
    });
  }

  handleSearch(value) {
    this.setState({
      strSearch: value
    });
  }

  closeForm() {
    this.setState({
      isShowForm: false
    });
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
  }

  handleSubmit(item) {
    let { items } = this.state;
    let id = null;

    if (item.id !== '') { //edit

      items = reject(items, { id: item.id });
      id = item.id;
      // items.push({
      //   id: item.id,
      //   name: item.name,
      //   level: +item.level
      // });

      // items.forEach((elm, key) => {
      //   if (elm.id === item.id) {
      //     items[key].name = item.name;
      //     items[key].level = +item.level;
      //   }
      // });
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
  }

  render() {
    let itemsOrigin = [...this.state.items];
    let items = [];
    let elmForm = null;
    let { orderBy, orderDir, isShowForm, strSearch, itemSelected } = this.state;

    // Search
    items = filter(itemsOrigin, (item) => {
      return includes(item.name.toLowerCase(), strSearch.toLowerCase())
    });

    // Sort
    items = funcOrderBy(items, [orderBy], [orderDir]);

    if (isShowForm) {
      elmForm = <Form itemSelected={itemSelected} onClickSubmit={this.handleSubmit} onClickCancel={this.closeForm} />;
    }

    return (
      <div>
        <Title />
        <Control
          orderBy={orderBy}
          orderDir={orderDir}
          onClickSearchGo={this.handleSearch}
          onClickSort={this.handleSort}
          onClickAdd={this.handleToogleForm}
          isShowForm={isShowForm}
          strSearch={this.props.strSearch} />
        {elmForm}
        <List
          onClickEdit={this.handleEdit}
          onClickDelete={this.handleDelete}
          items={items} />
      </div >
    );
  }
}

export default App;
