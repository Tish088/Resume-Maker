import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const NavbarWithUserIcon = ({ handleLogout }) => {
    const goToMyAccount = () => {
        window.location.href = '/my-account';
    };

    return (
        <div className="navbar">
            <img src="/ResumeLogo.png" alt="Logo" />
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/templates">Templates</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="user-profile">
                <img src="/profile_icon.png" alt="Profile" />
                <ul className='user-profile-dropdown'>
                    <li onClick={goToMyAccount}>
                        <FontAwesomeIcon icon={faUser} style={{ color: "#cc55f7" }} />
                        <span>My Account</span>
                    </li>
                    <li onClick={handleLogout}>
                        <FontAwesomeIcon icon={faRightFromBracket}  style={{color: "#352258",}} /> 
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavbarWithUserIcon;
