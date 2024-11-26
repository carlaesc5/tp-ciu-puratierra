import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-scroll';

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
                            <li>
                                <Link to="hero" smooth={true} duration={500}>Inicio</Link>
                            </li>
                            <li>
                                <Link to="about" smooth={true} duration={500}>Nuestra historia</Link>
                            </li>
                            <li>
                                <Link to="products" smooth={true} duration={500}>Productos</Link>
                            </li>
                            <li>
                                <Link to="contact" smooth={true} duration={500}>Contactanos</Link>
                            </li>
                        </ul>
                        <div className="icon" onClick={toggleMenu}>
                            <FaBars />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar