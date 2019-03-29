import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import { filter, includes } from 'lodash';

import tasks from './mocks/tasks';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: tasks,
      isShowForm: false,
      strSearch: ''
    };

    this.handleToogleForm = this.handleToogleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  render() {
    let itemsOrigin = this.state.items;
    let items = [];
    let isShowForm = this.state.isShowForm;
    let elmForm = null;
    const search = this.state.strSearch;

    items = filter(itemsOrigin, (item) => {
      return includes(item.name, search)
    });

    // if (search.length > 0) {
    //   itemsOrigin.forEach((item) => {
    //     if(item.name.toLowerCase().indexOf(search) !== -1) {
    //       items.push(item);
    //     }
    //   })
    // } else {
    //   items = itemsOrigin;
    // }

    

    if (isShowForm) {
      elmForm = <Form onClickCancel={this.closeForm}/>;
    }

    return (
      <div>
        <Title />
        <Control
          onclickSearchGo={this.handleSearch}
          onClickAdd={this.handleToogleForm}
          isShowForm={isShowForm}
          strSearch={this.props.strSearch} />
        {elmForm}
        <List items={items} />
      </div >
    );
  }
}

export default App;
