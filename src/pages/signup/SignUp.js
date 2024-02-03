import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    // Theme colors
    const themeColors = {
        yellow: '#FFD700',
        green: '#008000',
    };

    // Inline styles
    const styles = {
        form: {
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            backgroundColor: '#f0f8ff', // Light background for better readability
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            margin: '20px auto', // Centers the form
            transition: 'transform 0.3s ease-in-out', // Smooth transition for hover effect
            backgroundImage: 'url(https://png.pngtree.com/background/20220731/original/pngtree-abstract-racing-stripes-with-yellow-green-white-black-and-grey-background-picture-image_1897480.jpg)',

        },
        input: {
            padding: '10px',
            borderRadius: '5px',
            border: `1px solid ${themeColors.green}`, // Green border for inputs
        },
        button: {
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: themeColors.green, // Green background for the button
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.3s', // Transition effects
        },
        error: {
            color: 'red',
            textAlign: 'center',
        },
        title: {
            color: themeColors.green, // Green color for title
            textAlign: 'center',
        },
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email.endsWith("@cpp.edu")) {
            setError('CPP email required.');
            return;
        }
        setError('');
        try {
            const response = await axios.post('http://localhost:3001/signup', { username, email, password });
            if (response.status === 201) {
                navigate("/signin");
            }
        } catch (error) {
            setError('Invalid credentials or an error occurred. Please try again.');
        }
    };

    return (
        <div className='flex items-center justify-center h-screen'>
            <form style={styles.form} onSubmit={handleSubmit}>
                <h1 style={styles.title}>Create Account</h1>
                <input style={styles.input} required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="CPP Email" />
                <input style={styles.input} required type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input style={styles.input} required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                {error && <div style={styles.error}>{error}</div>}
                <button style={styles.button} onMouseEnter={e => e.target.style.backgroundColor = themeColors.yellow} onMouseLeave={e => e.target.style.backgroundColor = themeColors.green} type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
