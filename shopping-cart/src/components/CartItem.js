import React, { useState, useEffect } from 'react';
import Helpers from '../libs/Helpers';

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
        <a className="badge badge-danger delete-cart-item" href="/" data-product>Delete</a>
      </td>
    </tr>
  )
}

export default CartItem;