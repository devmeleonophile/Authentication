import React from "react";
import { useRef } from "react";
import { Card, Button, Form } from "react-bootstrap";

function Signup() {
  const emaildRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  return (
    <>
      <Card>
        <h2 className="w-100 text-center mt-4">SIGN IN</h2>
        <Card.Body>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emaildRef}
                Required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                Required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="confirmPass">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                ref={confirmPassRef}
                Required
              ></Form.Control>
            </Form.Group>
            <Button className="w-100">SIGN UP</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Didn't have the account yet? Login
      </div>
    </>
  );
}

export default Signup;
