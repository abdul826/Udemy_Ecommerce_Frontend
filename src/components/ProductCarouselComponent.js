import {Carousel} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarouselComponent = () => {

    const cursorP = {
        cursor:"pointer",
    }
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-1.png"
          alt="First slide"
          style={{height:"300px", objectFit:"cover" }}
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Best Seller In Laptop Category</h3>
        </LinkContainer>
          <p>Hp Pavellian Gaming Laptop</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          src="/images/carousel/carousel-2.png"
          alt="Second slide"
          style={{height:"300px", objectFit:"cover" }}
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Best Seller In Books Category</h3>
        </LinkContainer>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
          style={{height:"300px", objectFit:"cover" }}
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Best Seller In Camera Category</h3>
        </LinkContainer>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;

