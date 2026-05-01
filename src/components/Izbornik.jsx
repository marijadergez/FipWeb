import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {IME_APLIKACIJE, Routenames } from "../constants";
import { useNavigate } from "react-router-dom";
import React from 'react';
import Home from "../Home";

export default function Izbornik() {



    const navigate = useNavigate()

    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>FD2</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                        onClick={()=>navigate(RouteNames.HOME)}
                        >Početna</Nav.Link>
                       
                        <NavDropdown title="Usluge" id="basic-nav-dropdown">
                            <NavDropdown.Item
                            onClick={()=>navigate(RouteNames.USLUGE)}
                            >Smjerovi</NavDropdown.Item>
                       

                        <NavDropdown.Divider />
                        
                        <NavDropdown.Item
                            onClick={()=>navigate(RouteNames.KONTAKT)}
                            >Kontakt</NavDropdown.Item>
                            
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
