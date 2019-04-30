import React from 'react';

function CartItem() {
  return (
    <tr>
      <th scope="row">1</th>
      <td>Lorem ipsum.</td>
      <td>12 USD</td>
      <td><input name="cart-item-quantity-1" type="number" defaultValue={1} min={1} /></td>
      <td><strong>12 USD</strong></td>
      <td>
        <a className="badge badge-info update-cart-item" href="/" data-product>Update</a>
        <a className="badge badge-danger delete-cart-item" href="/" data-product>Delete</a>
      </td>
    </tr>
  )
}

export default CartItem;