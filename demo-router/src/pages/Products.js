import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [{
        "id": "0ff85fe5-df28-4431-ac11-1793a0c13f35",
        "name": "Banana - Leaves",
        "description": "iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl",
        "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
      }, {
        "id": "99aa2585-0a74-4cf9-b6ad-7a3b48a1a1da",
        "name": "Ginger - Pickled",
        "description": "et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "a98fa0bf-6a08-450b-b464-f70aac0693f9",
        "name": "Shrimp - 16 - 20 Cooked, Peeled",
        "description": "quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis",
        "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
      }, {
        "id": "ad9de634-7275-4096-9a90-8ef9b8c1c07e",
        "name": "Garlic - Primerba, Paste",
        "description": "et commodo vulputate justo in blandit ultrices enim lorem ipsum",
        "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
      }, {
        "id": "4a4f8ccc-db89-4fc8-9155-dfe1d8eca977",
        "name": "Carrots - Mini, Stem On",
        "description": "porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "18665682-77d9-4328-95b1-693788bb7f3a",
        "name": "Nestea - Iced Tea",
        "description": "potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et",
        "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "ba7fca3c-652f-416a-a4d0-9eeb2d21cfcb",
        "name": "Pie Shells 10",
        "description": "phasellus in felis donec semper sapien a libero nam dui",
        "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
      }, {
        "id": "9a46e3c3-28b2-46bf-b074-94e51d6819dc",
        "name": "Artichoke - Fresh",
        "description": "id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu",
        "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
      }, {
        "id": "b711ae8e-6652-42d3-bcd3-483988ea1c15",
        "name": "Sauce - Marinara",
        "description": "in quis justo maecenas rhoncus aliquam lacus morbi quis tortor",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "e5cb6327-abe7-4234-b339-c181a320847e",
        "name": "Campari",
        "description": "etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut",
        "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
      }, {
        "id": "9d9d91a1-b264-4d40-888d-9be905d3b901",
        "name": "Appetizer - Chicken Satay",
        "description": "ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
        "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
      }, {
        "id": "9ad183ac-d783-4151-894d-b40d262a2231",
        "name": "Eggplant - Regular",
        "description": "at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "27cde38d-ddec-483f-9232-4cee52e753a1",
        "name": "Soup - Campbells",
        "description": "odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras",
        "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
      }, {
        "id": "d0d4bafc-0cd6-4bf7-83ca-d1bbc66acfed",
        "name": "Soup - Campbells, Creamy",
        "description": "cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "87581a16-6e0f-4b21-9c62-7a2641707949",
        "name": "Soup - Clam Chowder, Dry Mix",
        "description": "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec",
        "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
      }, {
        "id": "9b6b0f84-4bdf-4a35-a58b-c9e951b6eab2",
        "name": "Rolled Oats",
        "description": "diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt",
        "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
      }, {
        "id": "25942a02-722a-424d-a093-6f21e0f22864",
        "name": "Chocolate Liqueur - Godet White",
        "description": "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa",
        "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
      }, {
        "id": "ec827689-8360-4305-a106-f9251c7dc057",
        "name": "Syrup - Monin, Amaretta",
        "description": "at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "4c0b2759-de03-4f9e-b276-1f7ef02d2a19",
        "name": "Sobe - Cranberry Grapefruit",
        "description": "porttitor lorem id ligula suspendisse ornare consequat lectus in est risus",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "93a24d14-78b2-4457-af80-bfa646589ef4",
        "name": "Yoplait Drink",
        "description": "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }]
    };
  }
  render() {
    const { products } = this.state;
    return ( 
      <div className="Products">
        <h2>Products</h2>
        <p>Providing best business solution for growing your business</p>
        <Container>
          <Row>
            { products.map(product => (
              <Col md="4">
                <Card>
                  <CardImg top width="100%" src={ product.imageUrl } alt="" />
                  <CardBody>
                    <CardTitle>{ product.title }</CardTitle>
                    <CardText>{ product.description }</CardText>
                    <Button>Add to card</Button>
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