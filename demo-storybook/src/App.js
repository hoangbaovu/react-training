import React, { Component } from 'react';
import './App.css';
import WeeklySongListItem from './components/WeeklySongListItem'
import WeeklySongListItemFunc from './components/WeeklySongListItemFunc'

class App extends Component {
  render() {
    return <div className="App">
      <WeeklySongListItem
        order="01"
        title="Anh Là Ai"
        singer="Phương Ly"
        viewCount={4000000} />
      <WeeklySongListItemFunc
        order="02"
        title="Thằng Điên"
        singer="JustaTee; Phương Ly"
        viewCount={64000000} />
    </div>;
  }
}

export default App;
