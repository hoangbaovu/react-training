import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import checkAllImg from './img/check-all.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        { title: 'Go Home', isComplete: true },
        { title: 'Eat', isComplete: false },
        { title: 'Sleep', isComplete: false }
      ]
    }
    
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  onKeyUp(event) {
    let text = event.target.value;
    if (event.keyCode === 13) { // enter key
      
      if (! text) {
        return;
      }
  
      text = text.trim();
      if (! text) {
        return;
      }
  
      this.setState({
        newItem: '',
        todoItems: [
          {
            title: text, isComplete: false
          },
          ...this.state.todoItems,
        ]
      })
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    const { todoItems, newItem } = this.state;
    if (todoItems.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={checkAllImg} width={32} height={32} alt="" />
            <input type="text"
              placeholder="Add a new item"
              value={newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp} />
          </div>
          { todoItems.length && todoItems.map((item, index) => 
              <TodoItem
                key={index}
                item={item}
                onClick={this.onItemClicked(item)} />
            )
          }
        </div>
      );
    } else {
      return (
        <div className="App">Nothing here.</div>
      )
    }
  }
}

export default App;
