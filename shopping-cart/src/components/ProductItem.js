import React from 'react';

function ProductItem() {
  return (
    <div className="media product">
      <div className="media-left">
        <a href="/">
          <img className="media-object" src="images/aplusautomation.jpg" alt="charmander" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">aplusautomation</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
        <input name="quantity-product-1" type="number" defaultValue={1} min={1} />
        <a data-product={1} href="/" className="price"> 12 USD </a>
      </div>
    </div>
  )
}

export default ProductItem;