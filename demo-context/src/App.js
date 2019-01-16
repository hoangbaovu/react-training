import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import NumberProvider from './components/NumberProvider';
import NumberContext from './contexts/NumberContext';

// Provider Consumer

class App extends Component {
  render() {
    return (
      <NumberProvider>
        <div className="App">
          <NumberContext.Consumer>
            {({number, updateNumber }) => <div>
              <h2>{number}</h2>
              <button onClick={updateNumber}>Update Number</button>
            </div>}
          </NumberContext.Consumer>
        </div>
      </NumberProvider>
    );
  }
}

export default App;
