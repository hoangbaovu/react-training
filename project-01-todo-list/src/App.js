import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import { filter, includes, orderBy as funcOrderBy, remove } from 'lodash';

import tasks from './mocks/tasks';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: tasks,
      isShowForm: false,
      strSearch: '',
      orderBy: 'name',
      orderDir: 'asc'
    };

    this.handleToogleForm = this.handleToogleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
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
      isShowForm: !this.state.isShowForm
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
    console.log(item);
    let {items} = this.state;
    items.push({
      id: item.id,
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
    let { orderBy, orderDir, isShowForm, strSearch } = this.state;

    // Search
    items = filter(itemsOrigin, (item) => {
      return includes(item.name.toLowerCase(), strSearch.toLowerCase())
    });

    // Sort
    items = funcOrderBy(items, [orderBy], [orderDir]);

    if (isShowForm) {
      elmForm = <Form onClickSubmit={this.handleSubmit} onClickCancel={this.closeForm}/>;
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
          onClickDelete={this.handleDelete}
          items={items} />
      </div >
    );
  }
}

export default App;
