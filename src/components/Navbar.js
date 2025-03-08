"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import './Navbar.css'; // Import the CSS module

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setIsOpen(false)
    };

    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Kiwi Portfolio</Link>
                <button className="btn btn-transparent ms-auto" type="button" onClick={toggleNavbar} >
                    Toggle
                </button>
                <div className={`fullscreenMenu ${isOpen ? 'show' : ''}`} id="navbarNav" onClick={() => setIsOpen(false)}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about" onClick={() => setIsOpen(false)}>About</Link>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-secondary mt-3" onClick={toggleDarkMode}>
                        {darkMode ? 'l' : 'd'}
                </button>
            </div>
        </nav>
    );
}