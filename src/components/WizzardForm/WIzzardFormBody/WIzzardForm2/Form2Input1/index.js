import { useEffect } from "react";
import { Form, Col } from "react-bootstrap";
export default function Form2Input1(props) {
  const { formData, onSetFormData, inputOneValid, setInputOneValid } = props;
  useEffect(() => {
    if (!formData.name.length) {
      setInputOneValid(false);
    } else {
      setInputOneValid(true);
    }
  }, [formData.name, inputOneValid]);
  return (
    <Form.Group as={Col} md="12" controlId="name">
      <Form.Label className="Input-Label">Name:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Your name"
        required
        value={formData.name}
        onChange={(e) => onSetFormData({ ...formData, name: e.target.value })}
        isValid={inputOneValid}
        isInvalid={!inputOneValid}
      />
      <Form.Control.Feedback>Your name is valid.</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please type your name.
      </Form.Control.Feedback>
    </Form.Group>
  );
}
