import { Container, Nav, Navbar } from "react-bootstrap";
import {IME_APLIKACIJE} from "../constants";
import React from 'react';
import Home from "../Home";

export default function Izbornik() {



    const navigate = useNavigate()

    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">{IME_APLIKACIJE}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
