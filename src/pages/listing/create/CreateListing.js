import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateListing() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:3001/item/create', {
                title,
                description,
                price,
                image
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.status === 201) {
                navigate("/");
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
        
        <form  className="p-8 flex flex-col gap-4 bg-gray-200 max-w-64 rounded-lg" onSubmit={handleSubmit}>
            <h1 className="font-bold text-xl">Create Listing</h1>
            <input className="p-1 rounded-md" required type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input className="p-1 rounded-md" required type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input className="p-1 rounded-md" required type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
            <input className="p-1 rounded-md" required type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" min="1" max="99999"/>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button className="p-1 rounded-md bg-blue-500 h-8 text-white" type="submit">Create Listing</button>
        </form>
    );
}

export default CreateListing;
