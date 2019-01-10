import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.TodoItem = [
      { title: 'Go Home', isComplete: true },
      { title: 'Eat', isComplete: false },
      { title: 'Sleep', isComplete: false }
    ];
  }

  render() {
    return (
      <div className="App">
        {
          this.TodoItem.map((item, index) => {
            return <TodoItem key={index} item={item}/>
          })
        }
      </div>
    );
  }
}

export default App;
