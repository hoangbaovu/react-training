import React from 'react';
import { Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap';
import ProductItem from './ProductItem';
import ProductItemNoSale from './ProductItemNoSale';

function ProductList() {
  return (
    <Col md={6}>
      <Card>
        <CardHeader><CardTitle>List Products</CardTitle></CardHeader>
        <CardBody id="list-product">
          <ProductItem />
          <ProductItemNoSale />
        </CardBody>
      </Card>
    </Col>
  )
}

export default ProductList;