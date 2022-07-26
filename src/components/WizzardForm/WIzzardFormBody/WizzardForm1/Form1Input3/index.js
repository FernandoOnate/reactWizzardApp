import { useEffect, useState } from "react";
import { Form, Col, InputGroup } from "react-bootstrap";
export default function Form1Input1(props) {
  const { inputThreeData, onSetInput3Form1Data } = props;
  
  const [inputThreeValid, setInputThreeValid] = useState(null);
  const [inputThreeInvalid, setInputThreeInValid] = useState(null);

  useEffect(() => {
    if (!inputThreeData.username.length) {
      setInputThreeInValid(true);
      setInputThreeValid(false);
    } else {
      setInputThreeInValid(false);
      setInputThreeValid(true);
    }
  }, [inputThreeData.username]);

  return (
    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
      <Form.Label className="Input-Label">Username:</Form.Label>
      <InputGroup hasValidation>
        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        <Form.Control
          type="text"
          value={inputThreeData.username}
          placeholder="Username"
          aria-describedby="inputGroupPrepend"
          required
          onChange={(e) => {
            onSetInput3Form1Data({
              ...inputThreeData,
              username: e.target.value,
            });
          }}
          isValid={inputThreeValid}
          isInvalid={inputThreeInvalid}
        />
        <Form.Control.Feedback type="invalid">
          Please choose a username.
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}
