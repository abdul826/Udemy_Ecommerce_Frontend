import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import {Row,Container} from 'react-bootstrap'

const HomePage = () => {

  const categories = [
    "Laptop",
    "Mobile",
    "Books",
    "Car",
    "Cloths",
    "Shoes",
    "Trimmer",
    "Sofa"
]
  return (
    <>
      <ProductCarouselComponent />
      <Container className="mt-3">
      <Row xs={1} md={2} className="g-4">
       {
        categories.map((category,idx)=>(
          <CategoryCardComponent key={idx} category={category} idx={idx} />
        ))
       }
       </Row>
       </Container>    </>
  );
};

export default HomePage;

