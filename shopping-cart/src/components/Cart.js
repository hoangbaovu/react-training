import React from 'react';
import { Col, Card, CardHeader, CardBody, Table } from 'reactstrap';
import CartItem from './CartItem';

function Cart() {
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
            <tbody id="my-cart-body">
              <CartItem />
              <CartItem />
              <CartItem />
            </tbody>
            <tfoot id="my-cart-footer">
              <tr><th colSpan={6}>Empty product in your cart</th></tr>
              <tr>
                <td colSpan={4}>There are <b>5</b> items in your shopping cart.</td>
                <td colSpan={2} className="total-price text-left">12 USD</td>
              </tr>
            </tfoot>
          </Table>
        </CardBody>
      </Card>
      <div className="alert alert-success" role="alert" id="mnotification">Updated <b>ivysaur</b></div>
    </Col>
  )
}

export default Cart;