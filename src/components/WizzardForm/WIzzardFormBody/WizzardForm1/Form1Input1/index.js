import { Form, Col} from "react-bootstrap";
export default function Form1Input1(props) {
  const { inputOneData, onSetFormOneData } = props;
    return (
      <Form.Group as={Col} md="12" controlId="validationCustom01">
        <Form.Label className="Input-Label">E-Mail:</Form.Label>
        <Form.Control
          value={inputOneData.email}
          type="email"
          placeholder="Your e-mail"
          onChange={(e) =>
            onSetFormOneData({ ...inputOneData, email: e.target.value })
          }
          required
        />
        <Form.Control.Feedback>Valid e-mail!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please make sure the "@" is include on the e-mail input.
        </Form.Control.Feedback>
      </Form.Group>
    );
}