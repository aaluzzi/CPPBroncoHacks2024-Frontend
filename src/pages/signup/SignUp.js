import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email.endsWith("@cpp.edu")) {
            setError('CPP email required.');
            return;
        }
        setError('');
        try {
            const response = await axios.post('http://localhost:3001/signup', {
                username,
                email,
                password
            });
            if (response.status === 201) {
                navigate("/signin");
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data || 'An error occurred. Please try again.');
            } else {
                setError('Network error. Please try again later.');
            }
        }
    };

    return (
        <div className='flex items-center justify-center h-full'>
            <form  className="p-8 flex flex-col gap-4 bg-gray-200 max-w-64 rounded-lg" onSubmit={handleSubmit}>
                <h1 className="font-bold text-xl">Create Account</h1>
                <input className="p-1 rounded-md" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input className="p-1 rounded-md" required type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input className="p-1 rounded-md" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button className="p-1 rounded-md bg-blue-500 h-8 text-white" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
