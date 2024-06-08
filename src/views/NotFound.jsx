import { Container } from "react-bootstrap";
import '../App.css';

const NotFound = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-4 display-1 text-center">¡Ruta no encontrada!</h1>
    </Container>
  );
};

export default NotFound;
