import React from "react";

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import logo from "../assets/logo_WealthHealth.svg"

function Header() {
    return(
        <header className="header">
            <Navbar className="navbar" bg="light" expand="lg">
                
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img
                                src={logo}
                                alt="Wealth Health's logo"
                                className="navbar__logo d-inline-block align-top"
                            />

                            <div className="navbar__title">
                                Wealth Health
                            </div>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav navbarScroll>
                            
                            <Nav as="ul">

                                <LinkContainer as="li" to="/createemployee">
                                    <Nav.Link>Create Employee</Nav.Link>
                                </LinkContainer>

                                <LinkContainer as="li" to="/currentemployee">
                                    <Nav.Link>Create Employee</Nav.Link>
                                </LinkContainer>
                                
                            </Nav>

                        </Nav>
                    </Navbar.Collapse>


                </Container>
            </Navbar>

        </header>
    )
}

export default Header