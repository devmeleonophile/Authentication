import Signup from "./Signup";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
      <Container
        className="d-flex justify-content-center align-items-center mt-5"
        style={{ maxHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </div>
  );
}
