import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setShowLogin }) => {
    return (
        <div className="navbar">
            <img src="/ResumeLogo.png" alt="Logo" />
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/templates">Templates</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/about">About</Link>

            </div>
            <div className="auth-buttons">
                <button onClick={() => setShowLogin(true)}>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;
