import React from 'react';
import { notifySuccess, notifyError } from './Notification';

const Login = () => {
    const handleLogin = () => {
        // Your login logic here
        // Assuming login is successful
        notifySuccess('Login successful!');
        // Assuming login failed
        // notifyError('Login failed. Please check your credentials.');
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                {/* Login form fields */}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
