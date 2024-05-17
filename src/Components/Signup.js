import React, { useState } from "react";
import { useRef } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useAuth } from "../contexts/signupContext";

import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const { signup, currentUser } = useAuth();
  const emaildRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const [error, setError] = useState("");
  const handlesubmit = (e) => {
    console.log(passwordRef.current.value);
    e.preventDefault();
    if (passwordRef.current.value !== confirmPassRef.current.value) {
      return setError("Password do not match");
    }
    try {
      setError("");
      signup(emaildRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (error) {
      setError("Unable to create an account");
    }
  };

  return (
    <>
      <Card>
        <h2 className="w-100 text-center mt-4">SIGN IN</h2>
        {/* {currentUser.email} */}
        {error && (
          <Alert className="text-center" variant="danger">
            {error}
          </Alert>
        )}
        <Card.Body>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emaildRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="confirmPass">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                ref={confirmPassRef}
                required
              ></Form.Control>
            </Form.Group>
            <Button onClick={(e) => handlesubmit(e)} className="w-100 mt-2">
              SIGN UP
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </>
  );
}

export default Signup;
