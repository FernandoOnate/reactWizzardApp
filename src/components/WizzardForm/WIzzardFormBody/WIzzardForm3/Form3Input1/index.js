import { Form, Col } from "react-bootstrap";
export default function Form3Input1() {
  return (
    <Form.Group as={Col} md="12" controlId="favoriteColor">
      <Form.Label className="Input-Label">Your favorite color:</Form.Label>
      <Form.Control type="text" placeholder="Favorite color" required />
      <Form.Control.Feedback>Valid input!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please type a valid input.
      </Form.Control.Feedback>
    </Form.Group>
  );
}
