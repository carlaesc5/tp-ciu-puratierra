import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header>
                <div className='container'>
                    <nav>
                        <div className="logo">
                            <h2>Pura Tierra</h2>
                        </div>
                        <ul className={isOpen ? 'nav-link active' : 'nav-link'}>
                            {/* Usamos Link de React Router para redirigir a la Home */}
                            <li>
                                <Link to="/" className="nav-link">Inicio</Link>
                            </li>
                            <li>
                                <ScrollLink to="about" smooth={true} duration={500} className="nav-link">Nuestra historia</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="products" smooth={true} duration={500} className="nav-link">Productos</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="contact" smooth={true} duration={500} className="nav-link">Contactanos</ScrollLink>
                            </li>
                        </ul>
                        <div className="icon" onClick={toggleMenu}>
                            <FaBars />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;

