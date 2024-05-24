import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from './Components/Navbar';
import NavbarWithUserIcon from './Components/NavbarWithUserIcon';
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import LoginPop from "./Components/LoginPop";
import useAuth from './hooks/useAuth';

export default function App() {
    const { auth, setAuth } = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth?.accessToken) {
            setIsLoggedIn(true);
        }
    }, [auth]);

    const handleLogin = (authData) => {
        setAuth(authData);
        setIsLoggedIn(true);
        setShowLogin(false); // Hide login popup after successful login
        navigate("/dashboard"); // Redirect to dashboard after login
    };

    const handleLogout = () => {
        setAuth({});
        setIsLoggedIn(false);
        navigate("/"); // Redirect to home after logout
    };

    return (
        <>
            {showLogin && <LoginPop setShowLogin={setShowLogin} handleLogin={handleLogin} />}
            {isLoggedIn ? (
                <NavbarWithUserIcon handleLogout={handleLogout} />
            ) : (
                <Navbar setShowLogin={setShowLogin} />
            )}
            <Outlet />
            <Footer/>
        </>
    );
}
