import React from 'react';
import { Row } from 'reactstrap';
import './App.css';
import Cart from './Cart';
import Title from './Title';
import ProductList from './ProductList';

function App() {
  return (
    <div className="container-fluid">
      <Title />
      <Row>
        <ProductList />
        <Cart />
      </Row>
    </div>
  );
}

export default App;
