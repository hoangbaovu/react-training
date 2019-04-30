import React from 'react';
import { connect } from 'react-redux';
import { Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap';
import * as configs from './../constants/Config';
import ProductItem from './ProductItem';
// import ProductItemNoSale from './ProductItemNoSale';

const ProductList = props => {
  let { products } = props;

  const showElementProduct = product => {
    let xhtml = <b>{configs.NOTI_EMPTY_PRODUCT}</b>

    if (products.length > 0) {
      xhtml = products.map((product, index) => {
        return (
          <ProductItem key={index} product={product} index={index} />
        )
      })
    }

    return xhtml;
  }
  return (
    <Col md={6}>
      <Card>
        <CardHeader><CardTitle>List Products</CardTitle></CardHeader>
        <CardBody id="list-product">
          {showElementProduct(products)}
        </CardBody>
      </Card>
    </Col>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductList);