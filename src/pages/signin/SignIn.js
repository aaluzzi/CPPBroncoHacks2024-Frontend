import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const themeColors = {
        yellow: '#FFD700',
        green: '#008000',
    };

    const styles = {
        
        form: {
            
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            backgroundColor: '#f0f8ff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            margin: '0 auto',
            transition: 'transform 0.3s ease-in-out', // Smooth transition for hover effect
            backgroundImage: 'url(https://png.pngtree.com/background/20220731/original/pngtree-abstract-racing-stripes-with-yellow-green-white-black-and-grey-background-picture-image_1897480.jpg)',

        },
        button: {
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: themeColors.green,
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out', // Transition effect for button hover
        },
        buttonHover: { // Additional style for hover state
            backgroundColor: themeColors.yellow,
        },
        error: {
            color: 'red',
            textAlign: 'center',
        },
        link: {
            color: themeColors.green,
            textDecoration: 'none',
        },
    };

    // Handle hover state for the button
    const [buttonHover, setButtonHover] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:3001/signin', { email, password });
            const token = response.data.token;
            login(token);
            navigate('/');
        } catch (error) {
            setError('Invalid credentials or an error occurred. Please try again.');
        }
    };

    return (
        <div className='flex items-center justify-center h-screen'>
            <form 
            
                className="flex flex-col gap-4 bg-gray-200 max-w-sm rounded-lg" 
                style={styles.form} 
                onSubmit={handleSubmit}
            >
                <h1 className="font-bold text-xl" style={{ color: themeColors.green }}>Sign In</h1>
                <input className="p-2 rounded-md" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input className="p-2 rounded-md" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                {error && <div style={styles.error}>{error}</div>}
                <button 
                    style={buttonHover ? { ...styles.button, ...styles.buttonHover } : styles.button}
                    onMouseEnter={() => setButtonHover(true)}
                    onMouseLeave={() => setButtonHover(false)}
                    type="submit"
                >
                    Sign In
                </button>
                <div>Need an account? <Link to="/signup" style={styles.link}>Sign Up</Link></div>
            </form>
        </div>
    );
}

export default SignIn;
