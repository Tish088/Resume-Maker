import React, { useState, useEffect, useRef } from 'react';
import './LoginPop.css';
import axios from '../api/axios';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const LOGIN_URL = 'http://localhost:8080/auth/signin';
const SIGNUP_URL = 'http://localhost:8080/auth/signup';

const LoginPop = ({ setShowLogin, handleLogin }) => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || "/dashboard";

    const [currState, setCurrState] = useState("Sign Up");
    const userRef = useRef();
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');
    const [email, setEmail] = useState("");
    const [fullName, setName] = useState("");
    const [password, setPwd] = useState("");

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (currState === "Sign Up") {
            try {
                const response = await axios.post(SIGNUP_URL,
                    JSON.stringify({ fullName, email, password }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    });
                const accessToken = response?.data?.jwt;
                const role = response?.data?.role;
                handleLogin({ fullName, email, password, role, accessToken });
                setEmail('');
                setPwd('');
                setName('');
                setShowLogin(false); // Close the popup on successful signup
                navigate(from, { replace: true });
            } catch (err) {
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 403) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg('Signup Failed');
                }
                errRef.current.focus();
            }
        } else {
            try {
                const response = await axios.post(LOGIN_URL,
                    JSON.stringify({ email, password }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    });
                const accessToken = response?.data?.jwt;
                const role = response?.data?.role;
                handleLogin({ email, password, role, accessToken });
                setEmail('');
                setPwd('');
                setShowLogin(false); // Close the popup on successful login
                navigate(from, { replace: true });
            } catch (err) {
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 403) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg('Login Failed');
                }
                errRef.current.focus();
            }
        }
    };

    const handleForgotPassword = () => {
        navigate('/change-password'); 
    };

    return (
        <>
            {!auth?.accessToken && (
                <div className='login-popup'>
                    <form onSubmit={submitHandler} className="login-popup-container">
                        <div className="login-popup-title">
                            <h2>{currState}</h2>
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <img onClick={() => setShowLogin(false)} src="/cross_icon.png" alt='' />
                        </div>
                        <div className="login-popup-inputs">
                            {currState === "Login" ? null : (
                                <input type='text'
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Your name'
                                    required />
                            )}
                            <input
                                type='email'
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Your email'
                                ref={userRef}
                                required />
                            <input
                                type='password'
                                onChange={(e) => setPwd(e.target.value)}
                                placeholder='Password'
                                required />
                        </div>
                        {currState === "Login" && (
                            <p>
                                <span onClick={handleForgotPassword} className="forgot-password-link">Forgot password?</span>
                            </p>
                        )}
                        <button>{currState === "Sign Up" ? "Create an account" : "Login"}</button>
                        <div className="login-popup-condition">
                            <input type='checkbox' required />
                            <p>By continuing, I agree to the terms of use and privacy policy</p>
                        </div>
                        {currState === "Login" ? (
                            <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                        ) : (
                            <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span ></p>
                        )}
                    </form>
                </div>
            )}
        </>
    );
};

export default LoginPop;
