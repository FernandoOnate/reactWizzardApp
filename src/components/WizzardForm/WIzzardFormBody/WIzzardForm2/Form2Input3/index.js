import React from "react";
import { Form, Col } from "react-bootstrap";
export default function index(props) {
  const { inputThreeData, onSetInputThreeData } = props;
  return (
    <Form.Group as={Col} md="12" controlId="phone">
      <Form.Label className="Input-Label">Phone number:</Form.Label>
      <Form.Control
        type="number"
        placeholder="Your phone"
        required
        value={inputThreeData.phone}
        onChange={(e) =>
          onSetInputThreeData({ ...inputThreeData, phone: e.target.value })
        }
        minLength={10}
      />
      <Form.Control.Feedback>Valid number!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please type a valid number.
      </Form.Control.Feedback>
    </Form.Group>
  );
}
