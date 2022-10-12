import React from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className='section'>
            <div className='logo'>
                <a href="#">
                    <img src={logo} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Navbar