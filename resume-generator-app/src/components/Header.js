import React from 'react'
import "./Header.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" variant="dark" className="w-10/12 mx-auto">
                <Navbar.Brand href="/">Resume Maker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav navbarScroll" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto justify-content-center">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
