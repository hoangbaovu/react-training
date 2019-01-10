import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.TodoItem = [
      'Go Home',
      'Eat',
      'Sleep'
    ];
  }

  render() {
    return (
      <div className="App">
        {
          this.TodoItem.map((item, index) => {
            return <TodoItem key={index} title={item}/>
          })
        }
      </div>
    );
  }
}

export default App;
