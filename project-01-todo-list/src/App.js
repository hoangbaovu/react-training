import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

import tasks from './mocks/tasks';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: tasks,
      isShowForm: false
    };

    this.handleToogleForm = this.handleToogleForm.bind(this);
  }

  handleToogleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    });
  }

  render() {
    let items = this.state.items;
    let isShowForm = this.state.isShowForm;
    let elmForm = null;
    if (isShowForm) {
      elmForm = <Form />;
    }

    return (
      <div>
        <Title />
        <Control 
          onClickAdd={this.handleToogleForm}
          isShowForm={isShowForm} />
        {elmForm}
        <List items={items} />
      </div >
    );
  }
}

export default App;
