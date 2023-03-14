import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Validate extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full-Name</Form.Label>
          <Form.Control type="text" placeholder="Your full name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone-Number</Form.Label>
          <Form.Control type="number" placeholder="Type you phone" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Validate;
