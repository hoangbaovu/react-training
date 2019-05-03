import React from 'react';
import { Row } from 'reactstrap';
import './App.css';
import Cart from './Cart';
import Title from './Title';
import ProductsContainer from '../containers/ProductsContainer';

function App() {
  return (
    <div className="container-fluid">
      <Title />
      <Row>
        <ProductsContainer />
        <Cart />
      </Row>
    </div>
  );
}

export default App;
