import { Form, Col} from "react-bootstrap";
export default function Form1Input1(props) {
    return (
      <Form.Group as={Col} md="12" controlId="validationCustom01">
        <Form.Label className="Input-Label">E-Mail:</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Your e-mail"
          defaultValue="example@example.com"
        />
        <Form.Control.Feedback>Valid e-mail!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please type a valid e-mail.
        </Form.Control.Feedback>
      </Form.Group>
    );
}