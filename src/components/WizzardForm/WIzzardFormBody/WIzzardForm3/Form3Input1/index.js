import { useEffect } from "react";
import { Form, Col } from "react-bootstrap";
export default function Form3Input1(props) {
  const { formData, onSetFormData, inputOneValid, setInputOneValid } = props;
  useEffect(() => {
    if (!formData.fColor.length) {
      setInputOneValid(false);
    } else {
      setInputOneValid(true);
    }
  }, [formData.fColor, inputOneValid]);
  return (
    <Form.Group as={Col} md="12" controlId="favoriteColor">
      <Form.Label className="Input-Label">Your favorite color:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Favorite color"
        required
        value={formData.fColor}
        onChange={(e) => onSetFormData({ ...formData, fColor: e.target.value })}
        isValid={inputOneValid}
        isInvalid={!inputOneValid}
      />
      <Form.Control.Feedback>Ok, that's a valid color.</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please type a valid input.
      </Form.Control.Feedback>
    </Form.Group>
  );
}
