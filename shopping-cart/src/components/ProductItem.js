import React, { useState } from 'react';
import { connect } from 'react-redux';
import Helpers from '../libs/Helpers';
import Validate from '../libs/Validate';
import { actionChangeNotify, actionBuyProduct } from '../actions/index';
import * as configs from '../constants/Config';

function ProductItem(props) {
  let { product } = props;
  let [quantity, setQuantity] = useState(1);

  const handleClick = product => {
    if (Validate.checkQuantity(quantity) === false) {
      props.changeNotify(configs.NOTI_GREATER_THAN_ONE);
    } else {
      props.buyProduct(product, +quantity);
      props.changeNotify(configs.NOTI_ACTION_ADD);
    }
    setQuantity(1);
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyProduct: (product, quantity) => {
      dispatch(actionBuyProduct(product, quantity));
    },
    changeNotify: value => {
      dispatch(actionChangeNotify(value));
    }
  }
}
export default connect(null, mapDispatchToProps)(ProductItem);