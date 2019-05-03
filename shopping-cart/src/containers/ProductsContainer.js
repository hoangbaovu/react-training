import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import * as configs from './../constants/Config';
import { actionChangeNotify, actionBuyProduct } from '../actions/index';
import ProductItem from './../components/ProductItem';
const ProductsContainer = ({ products, buyProduct, changeNotify }) => (
  <ProductList>
    {(products.length > 0) ?
      (
        products.map(
          (product, index) => <ProductItem
            onBuyProduct={buyProduct}
            onChangeNotify={changeNotify}
            key={index}
            product={product}
            index={index} />
        )
      ) : configs.NOTI_EMPTY_PRODUCT
    }
  </ProductList>
)

const mapStateToProps = state => {
  return {
    products: state.products
  }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);