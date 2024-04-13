import React, { useState } from 'react';
import './Navbar.scss'; 
import logo from './img/logo.svg'; 
import menuIcon from "./img/menu.png"; 

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="Navbar">
            <div className="Navbar-container">
                <div className="Navbar-logo">
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className={`Navbar-menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                    </ul>
                </div>
                <div className="Navbar-toggle" onClick={toggleMenu}>
                    <img src={menuIcon} alt="menu icon" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
