import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
const NavbarNav = () => {
    const [signOut] = useSignOut(auth);
    const emailCheck = localStorage.getItem('email');
    const navigate = useNavigate();
    async function logout() {
        const success = await signOut();
        if (success) {
            alert('You successfully Sign out');
            localStorage.removeItem('email');
            navigate('/login');
        }
    }
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='d-flex align-items-center'>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto d-flex justify-content-around w-25 align-items-center">
                        <NavLink className='text-decoration-none text-white' to="/">Home</NavLink>
                        {emailCheck ? <button onClick={logout}>Logout</button> :
                            <div>
                                <NavLink className='d-inline-block text-decoration-none text-white' to="/signup">SignUp</NavLink> 
                                <NavLink className='d-inline-block text-decoration-none text-white ms-5' to="/login">login</NavLink>
                            </div>
                        }
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavbarNav