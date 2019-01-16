import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';

import { CartProvider } from './contexts/Cart';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Router>
          <div className="App">
            <Navigation/>
            <Route path="/" exact component={Index} />
            <Route path="/products/" component={Products} />
            <Route path="/about/" component={About} />
            <Route path="/contact/" component={Contact} />
          </div>
        </Router>
      </CartProvider>
    );
  }
}

export default App;
