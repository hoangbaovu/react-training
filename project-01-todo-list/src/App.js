import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        
        {/* FORM : START */}
        <Form />
        {/* FORM : END */}

        {/* LIST : START */}
        <List />
        {/* LIST : END */}
      </div>
    );
  }
}

export default App;
