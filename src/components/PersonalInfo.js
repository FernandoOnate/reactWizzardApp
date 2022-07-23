import React from "react";
import { Form } from "react-bootstrap";

export default function PersonalInfo({ dataForm, setDataForm }) {
  return (
    <div className="personal-info-container">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your name"
          value={dataForm.name}
          onChange={(e) => {
            setDataForm({ ...dataForm, name: e.target.value });
          }}
          required
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="your lastname"
          value={dataForm.lastname}
          onChange={(e) => {
            setDataForm({ ...dataForm, lastname: e.target.value });
          }}
          required
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone number:</Form.Label>
        <Form.Control
          type="number"
          placeholder="Your phone"
          value={dataForm.phone}
          onChange={(e) => {
            setDataForm({ ...dataForm, phone: e.target.value });
          }}
          required
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
    </div>
  );
}
