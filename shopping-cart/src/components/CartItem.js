import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Helpers from '../libs/Helpers';
import { actionRemoveProduct, actionChangeNotify } from '../actions/index';
import * as configs from '../constants/Config';

function CartItem(props) {
  let { cartItem, index } = props;
  let { product } = cartItem;
  let [quantity, setQuantity] = useState(cartItem.quantity);

  useEffect(() => {
    document.title = `You clicked ${quantity} times`;
  }, [quantity]);

  const showSubTotal = (price, quantity) => {
    return Helpers.toCurrency(price * quantity, 'USD', "right")
  }

  const handleDelete = product => {
    props.removeProduct(product);
    props.changeNotify(configs.NOTI_ACTION_DELETE);
  }
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{product.name}</td>
      <td>{Helpers.toCurrency(product.price, 'USD', "right")}</td>
      <td>
        <input value={quantity} onChange={e => setQuantity(e.target.value)} name="quantity-product-1" type="number" min={1} />
      </td>
      <td><strong>{showSubTotal(product.price, quantity)}</strong></td>
      <td>
        <a className="badge badge-info update-cart-item" href="/" data-product>Update</a>
        <a onClick={() => handleDelete(product)} className="badge badge-danger delete-cart-item" data-product>Delete</a>
      </td>
    </tr>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeProduct: product => {
      dispatch(actionRemoveProduct(product));
    },
    changeNotify: value => {
      dispatch(actionChangeNotify(value));
    }
  }
}

export default connect(null, mapDispatchToProps)(CartItem);