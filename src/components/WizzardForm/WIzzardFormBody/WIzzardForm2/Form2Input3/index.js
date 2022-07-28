import  React, { useEffect } from "react";
import { Form, Col } from "react-bootstrap";
export default function Form2Input3(props) {
  const { formData, onSetFormData, inputThreeValid, setInputThreeValid } =
    props;
  useEffect(() => {
    if (!formData.phone.length) {
      setInputThreeValid(false);
    } else {
      setInputThreeValid(true);
    }
  }, [formData.phone, inputThreeValid]);
  return (
    <Form.Group as={Col} md="12" controlId="phone">
      <Form.Label className="Input-Label">Phone number:</Form.Label>
      <Form.Control
        type="number"
        placeholder="Your phone"
        required
        value={formData.phone}
        onChange={(e) => onSetFormData({ ...formData, phone: e.target.value })}
        isValid={inputThreeValid}
        isInvalid={!inputThreeValid}
        minLength={10}
      />
      <Form.Control.Feedback>Valid number!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please type a valid number.
      </Form.Control.Feedback>
    </Form.Group>
  );
}
