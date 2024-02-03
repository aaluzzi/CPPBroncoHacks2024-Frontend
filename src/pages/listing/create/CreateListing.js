import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateListing() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImage] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
    
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('images', images); // 'images' is the File object
        formData.append('category', 'any'); // Adjust based on your category handling
    
        try {
            const response = await axios.post('http://localhost:3001/items/create', formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            });
            navigate(`/listing/${response.data.item._id}`);
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message || 'An error occurred. Please try again.');
            } else {
                setError('Network error. Please try again later.');
            }
        }
    };

    // Define theme colors and styles
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
            backgroundColor: '#f0f8ff', // Light background for better readability
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adds a subtle shadow
            maxWidth: '500px',
            margin: '20px auto', // Centers the form
            backgroundImage: 'url(https://files.123freevectors.com/wp-content/original/169498-shiny-abstract-black-green-and-yellow-background-vector.jpg)',

        },
        input: {
            padding: '10px',
            borderRadius: '5px',
            border: `1px solid ${themeColors.green}`, // Green border for inputs
        },
        button: {
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: themeColors.green, // Green background for button
            color: 'white',
            border: 'none',
            cursor: 'pointer',
        },
        error: {
            color: 'red',
            textAlign: 'center',
        },
        title: {
            textAlign: 'center',
            color: themeColors.yellow, // Yellow color for title
        }
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <h1 style={styles.title}>Create Listing</h1>
            <input style={styles.input} required type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input style={styles.input} required type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input style={styles.input} required type="file" onChange={(e) => setImage(e.target.files[0])} />
            <input style={styles.input} required type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" min="1" max="99999"/>
            {error && <div style={styles.error}>{error}</div>}
            <button style={styles.button} type="submit">Create Listing</button>
        </form>
    );
}

export default CreateListing;
