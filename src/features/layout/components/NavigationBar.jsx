import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

import { contentData } from "../../../data/contentData";
import styles from "./NavigationBar.module.scss";
import logo from "../../../assets/images/logo.png";

function NavigationBar() {
  // manage the opening/closing of canva
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(!show);

  return (
    <>
      <Navbar bg="light" expand="md">
        <Container fluid>
          <Link className={styles.brandLink} to="/">
            <Navbar.Brand>
              <img
                alt="planet Earth"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top me-2"
              />
              Global Warming
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-md"
            onClick={toggleShow}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
            show={show}
          >
            <Offcanvas.Header closeButton onClick={handleClose}>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Global Warming
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* links are dinamically created through a loop from contentData.js. */}
                {contentData.map((item) => {
                  return (
                    <Link
                      to={item.link}
                      key={nanoid()}
                      className={`${styles[item.cssClass]} nav-link`}
                      onClick={handleClose}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
