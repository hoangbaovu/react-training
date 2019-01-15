import React, { Component } from 'react';
import './App.css';
import List from './components/List';

const data = ["A", "B", "C"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <List data={data} render={(item) => <div>{item}</div>}></List>
        <List data={data} render={(item) => <div>+ {item}</div>}></List>
      </div>
    );
  }
}

export default App;
