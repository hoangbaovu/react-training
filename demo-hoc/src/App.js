import React, { Component } from 'react';
import './App.css';
import AwesomeImage from './components/AwesomeImage';
// import HoverOpacity from './components/HoverOpacity';
import WithHoverOpacity from './components/WithHoverOpacity';

const HoverOpacityAwesomeImage = WithHoverOpacity(AwesomeImage, 0.8);

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HoverOpacity>
          <AwesomeImage src="http://picsum.photos/300/200"></AwesomeImage>
        </HoverOpacity> */}
        {/* HOC */}
        <HoverOpacityAwesomeImage src="http://picsum.photos/300/200" />
      </div>
    );
  }
}

export default App;
