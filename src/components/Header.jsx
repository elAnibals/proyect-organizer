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
                    <NavDropdown title={<img src={profile}/>} id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.2">Ajustes</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.3">Cerrar Sesion</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Brand>
                <Nav>
                    <DropdownButton size="lg"
                        variant="outline-primary" 
                        title="Proyectos" 
                        id="bg-nested-dropdown"
                    >
                        <Dropdown.Item eventKey="1">Proyecto1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Proyecto2</Dropdown.Item>
                    </DropdownButton>
                </Nav>
                <Button size="lg"className="rounded-circle" variant="outline-primary">+</Button>
            </Container>


        </Navbar>
    );
}

export default Header;