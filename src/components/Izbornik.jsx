import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RouteNames, IME_APLIKACIJE } from "../../constants";

export default function Izbornik() {
  const navigate = useNavigate();

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="navbar-glass"
    >
      <Container>

        <Navbar.Brand
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate(RouteNames.HOME);
          }}
          className="fip-brand"
        >
          <span className="fip-brand-main">FIP</span>
          <span className="fip-brand-text">
            Knjigovodstvo i računovodstvo
          </span>
        </Navbar.Brand>

        
        

        <Navbar.Collapse id="fip-navbar">
          <Nav className="ms-auto fip-nav">

            <Nav.Link
              onClick={() => navigate(RouteNames.HOME)}
              className="fip-nav-link"
            >
              Početna
            </Nav.Link>

            <Nav.Link
              onClick={() => navigate(RouteNames.USLUGE)}
              className="fip-nav-link"
            >
              Usluge
            </Nav.Link>

            <button
              className="fip-contact-btn"
              onClick={() => navigate(RouteNames.USLUGE)}
            >
              Kontakt
            </button>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}