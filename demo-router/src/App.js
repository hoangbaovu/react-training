import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';

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
