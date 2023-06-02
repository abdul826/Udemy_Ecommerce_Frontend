import { Form } from "react-bootstrap";

const PriceFilterComponent = () => {
  return (
    <>
      <Form.Label className="fw-bold">
        <span>Price no grater than</span> 500$
      </Form.Label>
      
      <Form.Range min={10} max={1000} step={10} />
    </>
  );
};

export default PriceFilterComponent;
