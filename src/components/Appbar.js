import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function Appbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={'/'}><Navbar.Brand>Murim Chronicles</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="About" id="collapsible-nav-about">
              <NavDropdown.Item href="#action/3.1">Devlopers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Rules
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comptiablity</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to={'/products'}>Product</Link>
            <Link to={'/cart'}>
              Cart
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;