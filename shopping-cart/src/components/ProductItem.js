import React from 'react';
import Helpers from '../libs/Helpers';

function ProductItem(props) {
  let { product } = props;

  const showAreaBuy = product => {
    let xhtml = null;
    let price = Helpers.toCurrency(product.price, 'USD', "right")
    if (product.canBuy === true) {
      xhtml = <>
        <input name="quantity-product-1" type="number" defaultValue={1} min={1} />
        <a data-product={1} href="/" className="price"> {price} </a>
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