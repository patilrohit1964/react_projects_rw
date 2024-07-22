import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const NavbarNav = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto w-50 d-flex justify-content-between">
            <Link to="/home">Home</Link>
            <Link to="/productList">Product List</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/pricing">Add Product</Link>
            <Link to="/login">Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarNav