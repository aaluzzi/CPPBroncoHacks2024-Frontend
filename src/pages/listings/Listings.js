import axios from 'axios';
import SearchBar from "../../SearchBar";
import { useState, useEffect } from 'react';
import ListingFrame from '../listings/ListingFrame'

import { useAuth } from '../../AuthProvider';

export default function Listings({ sellerId }) {
    const { isAuthenticated } = useAuth();
    const [listings, setListings] = useState([]);

    const fetchListings = async (title) => {
        try {
            const response = await axios.get(`http://localhost:3001/items?title=${title}`);
            if (sellerId) {
                setListings(response.data.filter(item => item.sellerId === sellerId));
            } else {
                setListings(response.data);
            }
        } catch (err) {
            console.error('Failed to fetch listings:', err);
        }
    }

    useEffect(() => {
        fetchListings('');
    }, []); // The empty array ensures this effect runs once on mount

    // Define theme colors
    const themeColors = {
        yellow: '#FFD700',
        green: '#008000',
    }; 

    // Inline styles for theme-specific elements
    const styles = {
        header: {
            color: '#1e293b',
            padding: '20px',
            fontSize: '2rem',
            fontFamily: 'Segoe UI',
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: 'white', // A light background color to complement the theme
        },
        container: {
            backgroundColor: 'white', // Consistent with the header for a cohesive look
        },
    };

    if (!isAuthenticated) {
        return (
            <div style={styles.container} className="flex flex-col min-h-screen justify-center align-center">Please sign in to view listings.</div>
        );
    }

    return (
        <div style={styles.container} className="flex flex-col min-h-screen">
            <SearchBar fetchListings={fetchListings} />
            <h1 style={styles.header}>Listings</h1>
            <ul className="flex flex-wrap justify-center gap-5 p-4">
                {listings.map((listing) => (
                <ListingFrame key={listing._id} item={listing} />
            ))}
            </ul>
        </div>
    );
}
