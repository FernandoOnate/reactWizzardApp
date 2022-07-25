import { Form, Col } from "react-bootstrap";
export default function Form1Input1(props) {
  return (
    <Form.Group as={Col} md="12" controlId="validationCustom02">
      <Form.Label className="Input-Label">Password:</Form.Label>
      <Form.Control
        required
        type="password"
        placeholder="Type a password"
        defaultValue=""
      />
      <Form.Control.Feedback>Valid password!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please type a valid password.
      </Form.Control.Feedback>
    </Form.Group>
  );
}
