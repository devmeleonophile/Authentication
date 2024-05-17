import React, { useState } from "react";
import { useRef } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useAuth } from "../contexts/signupContext";

import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const { resetPassword } = useAuth();
  const emaildRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  async function handlesubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      await resetPassword(emaildRef.current.value);
      setMessage(
        "Please check your Inbox for the instructions to resetPassword",
      );
    } catch {
      setError("Unable to Reset Password");
    }
  }

  return (
    <>
      <Card>
        <h2 className="w-100 text-center mt-4">Reset Password</h2>
        {/* {currentUser.email} */}
        {error && (
          <Alert className="text-center" variant="danger">
            {error}
          </Alert>
        )}
        {message && (
          <Alert className="text-center" variant="success">
            {message}
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
            <Button onClick={(e) => handlesubmit(e)} className="w-100 mt-2">
              Reset Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/login">Log In</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Don't have an account?
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

export default ForgotPassword;
