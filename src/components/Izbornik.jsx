import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RouteNames, IME_APLIKACIJE } from "../../constants";

export default function Izbornik() {
  const navigate = useNavigate();

  return (
    <Navbar 
      expand="lg" 
      sticky="top" 
      className="navbar-glass shadow-sm"
    >
      <Container>
        <Navbar.Brand 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            navigate(RouteNames.HOME);
          }}
          className="fw-bold"
        >
          {IME_APLIKACIJE}
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* "ms-auto" gura linkove desno */}
            <Nav.Link 
              onClick={() => navigate(RouteNames.HOME)}
              className="fw-medium"
            >
              Početna
            </Nav.Link>
            
            {/* Ovdje možeš dodati druge linkove kasnije, npr.: */}
            {/* <Nav.Link onClick={() => navigate(RouteNames.USLUGE)}>Usluge</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}