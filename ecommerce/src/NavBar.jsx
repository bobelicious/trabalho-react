import { Button, Row, Col, Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function NavBar() {
  const [menu, setMenu] = useState();

  const definirMenu = (local) => {
    setMenu(local);
  };
  return (
    <Navbar bg="dark" variant="dark" style={{ marginBottom: "50px" }}>
      <Container fluid>
        <Navbar.Brand href="/">EPICA Jogos</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
         <Nav.Link href="/pedidos">Pedidos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
