import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Header = () => {
    return (
        <div>
            <nav className='d-flex justify-content-around align-items-center pt-3 nav-bar bg-secondary text-white'>
                <h1>Logo</h1>  
                <ul className='d-flex list-unstyled justify-content-between align-items-center'>
                    <li className='me-4'><a href="" className='text-white text-decoration-none'>Home</a></li>
                    <li className='me-4'><a href="" className='text-white text-decoration-none'>About</a></li>
                    <li className='me-4'><a href="" className='text-white text-decoration-none'>Contact</a></li>
                </ul>
                <ul className='d-flex list-unstyled justify-content-between align-items-center'>
                    <li><a href="" className='text-white text-decoration-none'><FaFacebook/></a></li>
                    <li><a href="" className='text-white text-decoration-none'><FaInstagram/></a></li>
                    <li><a href="" className='text-white text-decoration-none'><FaTwitter/></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header