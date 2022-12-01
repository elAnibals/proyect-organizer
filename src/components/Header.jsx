import React from "react";
import profile from "../assets/profile.png"
import "../styles/Header.css"
import {
  Container, 
  Navbar,
  Nav,
  NavDropdown, 
  Button, 
  Dropdown,
  DropdownButton,
  MenuItem,
 } from "react-bootstrap"

const Header = () =>{
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Button size="lg"className="rounded-circle" variant="outline-primary">+</Button>
          <NavDropdown title={<img src={profile}/>} id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Perfil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.2">Ajustes</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.3">Cerrar Sesion</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
