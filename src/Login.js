import React, { useState } from "react";
import { useRef } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useAuth } from "./contexts/signupContext";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { login, currentUser } = useAuth();
  const emaildRef = useRef();
  const navigate = useNavigate();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  async function handlesubmit(e) {
    console.log(passwordRef.current.value);
    e.preventDefault();
    try {
      setError("");
      await login(emaildRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Unable to Login , Please Signup");
    }
  }

  return (
    <>
      <Card>
        <h2 className="w-100 text-center mt-4">Log In</h2>
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
            <Button onClick={(e) => handlesubmit(e)} className="w-100 mt-2">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Do u have account?
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

export default Login;
