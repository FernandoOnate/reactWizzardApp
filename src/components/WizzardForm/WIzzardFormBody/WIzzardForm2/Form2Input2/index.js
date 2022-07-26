import { Form, Col } from 'react-bootstrap';
export default function Form2Input2(props) {
  const { inputTwoData, onSetInputTwoData } = props;
    return (
      <Form.Group as={Col} md="12" controlId="lastname">
        <Form.Label className="Input-Label">Lastname:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your lastname"
          required
          value={inputTwoData.lastname}
          onChange={(e) =>
            onSetInputTwoData({ ...inputTwoData, lastname: e.target.value })
          }
        />
        <Form.Control.Feedback>Valid input!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please type a valid input.
        </Form.Control.Feedback>
      </Form.Group>
    );
}