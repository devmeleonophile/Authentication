import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/signupContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Container
          className="d-flex justify-content-center align-items-center mt-5"
          style={{ maxHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />

              <Route
                exact
                path="/"
                element={
                  <PrivateRoute>
                    <Navigate to="/login" />
                  </PrivateRoute>
                }
              />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Container>
      </AuthProvider>
    </Router>
  );
}
