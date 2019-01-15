import React, { Component } from 'react';
import './App.css';
import AwesomeImage from './components/AwesomeImage';
// import HoverOpacity from './components/HoverOpacity';
import WithHoverOpacity from './components/WithHoverOpacity';
import withGrayScale from './components/withGrayScale';

const HoverOpacityAwesomeImage = WithHoverOpacity(AwesomeImage, 0.8);
const HoverGrayScale = withGrayScale(AwesomeImage, 1);

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HoverOpacity>
          <AwesomeImage src="http://picsum.photos/300/200"></AwesomeImage>
        </HoverOpacity> */}
        {/* HOC */}
        <HoverOpacityAwesomeImage src="http://picsum.photos/300/200" />

        <h2>Gray Scale</h2>
        <HoverGrayScale src="http://picsum.photos/300/200" />
      </div>
    );
  }
}

export default App;
