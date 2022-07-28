import { useEffect } from "react";
import { Form, Col } from "react-bootstrap";
export default function Form2Input2(props) {
  const { formData, onSetFormData, inputTwoValid, setInputTwoValid } = props;
  useEffect(() => {
    if (!formData.lastname.length) {
      setInputTwoValid(false);
    } else {
      setInputTwoValid(true);
    }
  }, [formData.lastname, inputTwoValid]);
  return (
    <Form.Group as={Col} md="12" controlId="lastname">
      <Form.Label className="Input-Label">Lastname:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Your lastname"
        required
        value={formData.lastname}
        onChange={(e) =>
          onSetFormData({ ...formData, lastname: e.target.value })
        }
        isValid={inputTwoValid}
        isInvalid={!inputTwoValid}
      />
      <Form.Control.Feedback>Lastname looks great.</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please type a valid input.
      </Form.Control.Feedback>
    </Form.Group>
  );
}
