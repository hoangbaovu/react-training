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
          this.TodoItem.length > 0 && this.TodoItem.map((item, index) => {
            return <TodoItem key={index} item={item}/>
          })
        }
        {
          this.TodoItem.length === 0 && 'Nothing Here.'
        }
      </div>
    );
  }
}

export default App;
