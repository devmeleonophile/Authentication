import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "./contexts/signupContext";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();
  async function handleLogout(e) {
    e.preventDefault();
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Unable to signout");
    }
  }
  return (
    <Card>
      {error && <Alert variant="danger">{error}</Alert>}
      <Card.Body className="w-100 text-center mt-3">Profie</Card.Body>
      {currentUser && currentUser.email}
      <Button onClick={(e) => handleLogout(e)}>Logout</Button>
    </Card>
  );
}

export default Dashboard;
