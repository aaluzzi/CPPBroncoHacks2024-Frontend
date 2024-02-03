import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateListing.css'; // Import the CSS file

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

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="title">Create Listing</h1>
            <input className="input" required type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input className="input" required type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input className="input" required type="file" onChange={(e) => setImage(e.target.files[0])} />
            <input className="input" required type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" min="1" max="99999"/>
            {error && <div className="error">{error}</div>}
            <button className="button" type="submit">Create Listing</button>
        </form>
    );
}

export default CreateListing;
