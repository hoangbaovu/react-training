import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from './pages/about';
import Navigation from './components/Navigation';
const Index = () => <h2>Home</h2>;
const Contact = () => <h2>Contact</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation/>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
