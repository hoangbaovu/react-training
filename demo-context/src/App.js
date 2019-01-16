import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Counter from './components/Counter';

const data = ["A", "B", "C"];

// Provider Consumer
const NumberContext = React.createContext();

class App extends Component {
  render() {
    return (
      <div className="App">
        <NumberContext.Provider value={5}>
          <NumberContext.Consumer>
            {(context) => <h2>{context}</h2>}
          </NumberContext.Consumer>
          <Counter>
            {/* {state => <div>{state.count}</div>} */}
            {({count}) => <div>{count}</div>}
          </Counter>
        </NumberContext.Provider>
      </div>
    );
  }
}

export default App;
