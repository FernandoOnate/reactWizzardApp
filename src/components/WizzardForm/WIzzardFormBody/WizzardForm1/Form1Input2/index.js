import { useEffect, useState } from "react";
import { Form, Col } from "react-bootstrap";

export default function Form1Input1(props) {
  
  const { formData, onSetFormData, inputTwoValid, setInputTwoValid } = props;

  useEffect(() => {
    if (!formData.password.length) {
      setInputTwoValid(false);
    } else {
      setInputTwoValid(true);
    }
  }, [formData.password]);

  return (
    <Form.Group as={Col} md="12" controlId="validationCustom02">
      <Form.Label className="Input-Label">Password:</Form.Label>
      <Form.Control
        value={formData.password}
        type="password"
        placeholder="Type a password"
        onChange={(e) =>
          onSetFormData({ ...formData, password: e.target.value })
        }
        required
        isValid={inputTwoValid}
        isInvalid={!inputTwoValid}
      />
      <Form.Control.Feedback>Valid password!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please type a valid password.
      </Form.Control.Feedback>
    </Form.Group>
  );
}
