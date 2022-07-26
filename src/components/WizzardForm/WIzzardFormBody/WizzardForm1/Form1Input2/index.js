import { useEffect, useState } from "react";
import { Form, Col, InputGroup } from "react-bootstrap";


export default function Form1Input1(props) {
  const { inputTwoData, onSetInput1Form1Data } = props;
  const [inputTwoValid, setInputTwoValid] = useState(null);
  const [inputTwoInvalid, setInputTwoInValid] = useState(null);
  useEffect(() => {
    if (!inputTwoData.password.length) {
      setInputTwoInValid(true);
      setInputTwoValid(false);
    } else {
      setInputTwoInValid(false);
      setInputTwoValid(true);
    }
  }, [inputTwoData.password]);
  return (
    <InputGroup hasValidation>
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
          isValid={inputTwoValid}
          isInvalid={inputTwoInvalid}
        />
        <Form.Control.Feedback>Valid password!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please type a valid password.
        </Form.Control.Feedback>
      </Form.Group>
    </InputGroup>
  );
}
