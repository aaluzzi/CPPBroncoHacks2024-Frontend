import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthProvider';

import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:3000/api/signin', { email, password });
            const token = response.data.token;
            login(token);
            navigate('/');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Invalid credentials. Please try again.');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <form className="p-8 flex flex-col gap-4 bg-gray-200 max-w-64 rounded-lg" onSubmit={handleSubmit}>
            <input className="p-1 rounded-md" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input className="p-1 rounded-md" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button className="p-1 rounded-md bg-blue-500 h-8 text-white" type="submit">Sign In</button>
        </form>
    );
}

export default SignIn;
