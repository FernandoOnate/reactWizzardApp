import { Form, Col } from "react-bootstrap";
export default function Form1Input1(props) {
  const { inputTwoData, onSetInput1Form1Data } = props;

  return (
    <Form.Group as={Col} md="12" controlId="validationCustom02">
      <Form.Label className="Input-Label">Password:</Form.Label>
      <Form.Control
        value={inputTwoData.password}
        type="password"
        placeholder="Type a password"
        onChange={(e) =>
          onSetInput1Form1Data({ ...inputTwoData, password: e.target.value })
        }
        required
      />
      <Form.Control.Feedback>Valid password!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please type a valid password.
      </Form.Control.Feedback>
    </Form.Group>
  );
}
