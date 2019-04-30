
import React from 'react';

function ProductItemNoSale() {
  return (
    <div className="media product">
      <div className="media-left">
        <a href="/">
          <img className="media-object" src="images/aplus-media.jpg" alt="charmander" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">aplus media</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
        <span className="price"> 12 USD</span>
      </div>
    </div>
  )
}

export default ProductItemNoSale;