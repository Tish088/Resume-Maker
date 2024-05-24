import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './BeforeChangePassword.css';

const BeforeChangePassword = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleUpdatePassword = () => {
        if (auth.password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        // Proceed to the actual change password page
        navigate('/change-password');
    };

    return (
        <div className="change-password-container">
            <div className="password-field">
                <label>Current Password:</label>
                <input
                    type="password"
                    value={auth.password || ''}
                    readOnly
                />
            </div>
            <div className="password-field">
                <label>Password Again:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            {error && <p className="error">{error}</p>}
            <button onClick={handleUpdatePassword}>Update Password</button>
        </div>
    );
};

export default BeforeChangePassword;
