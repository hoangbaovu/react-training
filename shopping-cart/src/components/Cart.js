import React from 'react';
import { connect } from 'react-redux';
import { sumBy } from 'lodash';
import { Col, Card, CardHeader, CardBody, Table } from 'reactstrap';
import Helpers from '../libs/Helpers';
import CartItem from './CartItem';
import Notify from './Notify';

function Cart(props) {
  let { items } = props;

  const showElementBody = items => {
    let xhtml = null;

    if (items.length > 0) {
      xhtml = items.map((cartItem, index) => {
        return (
          <CartItem key={index} index={index} cartItem={cartItem} />
        );
      });
    }

    return <tbody id="my-cart-body">{xhtml}</tbody>;
  }

  const showElementFooter = items => {
    let xhtml = <tr><th colSpan={6}>Empty product in your cart</th></tr>;

    if (items.length > 0) {
      let totalQuantity = sumBy(items, 'quantity');
      let totalPrice = sumBy(items, (item) => {
        return item.product.price * item.quantity;
      });

      xhtml = <tr>
        <td colSpan={4}>There are <b>{totalQuantity}</b> items in your shopping cart.</td>
        <td colSpan={2} className="total-price text-left">{Helpers.toCurrency(totalPrice, 'USD', "right")}</td>
      </tr>
    }
    return <tfoot id="my-cart-footer">{xhtml}</tfoot>;
  }

  return (
    <Col md={6}>
      <Card>
        <CardHeader>Your Cart</CardHeader>
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Pokemon</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            {showElementBody(items)}
            {showElementFooter(items)}
          </Table>
        </CardBody>
      </Card>
      <Notify />
    </Col>
  )
}

const mapStateToProps = state => {
  return {
    items: state.carts
  }
}

export default connect(mapStateToProps, null)(Cart);