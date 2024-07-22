import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
const NavbarLink = () => {
    function ActiveCheckFunction({isActive}){
        return isActive ? "green" :"white"
    }
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto d-flex justify-content-between w-25">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/login">Login</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarLink