import React, { useState } from 'react';
import Helpers from '../libs/Helpers';
import Validate from '../libs/Validate';

function ProductItem(props) {
  let { product } = props;
  let [quantity, setQuantity] = useState(1);

  const handleClick = product => {

    if (Validate.checkQuantity(quantity) === false) {
      console.log("Validate");
    } else {
      console.log(`${+quantity} - ${product.id}`);
    }
  }

  const showAreaBuy = product => {
    let xhtml = null;
    let price = Helpers.toCurrency(product.price, 'USD', "right")
    if (product.canBuy === true) {
      xhtml = <>
        <input value={quantity} onChange={e => setQuantity(e.target.value)} name="quantity-product-1" type="number" min={1} />
        <a onClick={() => handleClick(product)} className="price"> {price} </a>
      </>
    } else {
      xhtml = <span className="price"> {price} </span>
    }
    return xhtml;
  }

  return (
    <div className="media product">
      <div className="media-left">
        <a href="/">
          <img className="media-object" src={`images/${product.image}`} alt={product.name} />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{product.name}</h4>
        <p>{product.summary}</p>
        {showAreaBuy(product)}
      </div>
    </div>
  )
}

export default ProductItem;