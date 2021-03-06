import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import { CartContext } from '../contexts/Cart';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("https://qzw5004466.sse.codesandbox.io/products").then(res => {
      this.setState({
        products: res.data
      });
    });
  }

  render() {
    const { products } = this.state;
    return ( 
      <div className="Products">
        <h2>Products</h2>
        <p>Providing best business solution for growing your business</p>
        <Container>
          <Row>
            { products.map((product, index) => (
              <Col md="4" key={index}>
                <Card>
                  <CardImg top width="100%" src={ product.imageUrl } alt="" />
                  <CardBody>
                    <CardTitle>{ product.title }</CardTitle>
                    <CardText>{ product.description }</CardText>
                    <CartContext.Consumer>
                      { ({ addToCart }) => <Button onClick={() => addToCart(product)}>Add to card</Button>}
                    </CartContext.Consumer>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string
};

CardBody.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

// CardColumns.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardDeck.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardFooter.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardGroup.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardHeader.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

CardImg.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: PropTypes.bool,
  bottom: PropTypes.bool
};

// CardImgOverlay.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardLink.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string,
//   // ref will only get you a reference to the CardLink component, use innerRef to get a reference to the DOM element (for things like focus management).
//   innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
// };

// CardSubtitle.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

CardText.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

export default Products;