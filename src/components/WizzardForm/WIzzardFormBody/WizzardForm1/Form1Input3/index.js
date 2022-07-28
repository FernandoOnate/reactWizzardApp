import { useEffect} from "react";
import { Form, Col, InputGroup } from "react-bootstrap";
export default function Form1Input1(props) {
  const { formData, onSetFormData, inputThreeValid, setInputThreeValid } =
    props;

  useEffect(() => {
    if (!formData.username.length) {
      setInputThreeValid(false);
    } else {
      setInputThreeValid(true);
    }
  }, [formData.username]);

  return (
    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
      <Form.Label className="Input-Label">Username:</Form.Label>
      <InputGroup hasValidation>
        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        <Form.Control
          type="text"
          value={formData.username}
          placeholder="Username"
          aria-describedby="inputGroupPrepend"
          required
          onChange={(e) => {
            onSetFormData({
              ...formData,
              username: e.target.value,
            });
          }}
          isValid={inputThreeValid}
          isInvalid={!inputThreeValid}
        />
        <Form.Control.Feedback type="invalid">
          Please choose a username.
        </Form.Control.Feedback>
        <Form.Control.Feedback>Username is good.</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}
