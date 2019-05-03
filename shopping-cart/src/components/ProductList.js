import React from 'react';
import { Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap';

const ProductList = ({ children }) => {
  return (
    <Col md={6}>
      <Card>
        <CardHeader><CardTitle>List Products</CardTitle></CardHeader>
        <CardBody id="list-product">
          {children}
        </CardBody>
      </Card>
    </Col>
  )
}

export default ProductList;