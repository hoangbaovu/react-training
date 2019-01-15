import React, { Component } from 'react';
import './App.css';
import AwesomeImage from './components/AwesomeImage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HoverOpacity>
          <AwesomeImage src="http://picsum.photos/300/200"></AwesomeImage>
        </HoverOpacity>
      </div>
    );
  }
}

export default App;
