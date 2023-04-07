import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import styles from "./NavigationBar.module.scss";
import logo from "../../assets/images/logo.png";

function NavigationBar() {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              alt="planet Earth"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            Global Warming
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Global Warming
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Temperature</Nav.Link>
                <Nav.Link href="#action2">Carbon Dioxide</Nav.Link>
                <Nav.Link href="#action2">Methane</Nav.Link>
                <Nav.Link href="#action2">Nitrous Oxide</Nav.Link>
                <Nav.Link href="#action2">Polar Ice </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
