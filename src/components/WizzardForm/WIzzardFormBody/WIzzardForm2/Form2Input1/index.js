import { Form,Col } from 'react-bootstrap';
export default function Form2Input1(props) {
  const {inputOneData , onSetInputOneData} = props;
    return (
      <Form.Group as={Col} md="12" controlId="name">
        <Form.Label className="Input-Label">Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your name"
          required
          value={inputOneData.name}
          onChange={(e) =>
            onSetInputOneData({ ...inputOneData, name: e.target.value })
          }
        />
        <Form.Control.Feedback>Valid input!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please type a valid input.
        </Form.Control.Feedback>
      </Form.Group>
    );
}