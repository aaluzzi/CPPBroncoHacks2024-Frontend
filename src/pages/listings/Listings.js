import axios from 'axios';
import SearchBar from "../../SearchBar";
import { useState, useEffect } from 'react';
import ListingFrame from '../listings/ListingFrame'

export default function Listings() {
    const [listings, setListings] = useState([]);
    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await axios.get('http://localhost:3001/items');
                setListings(response.data);
            } catch (err) {
                console.error('Failed to fetch listings:', err);
            }
        };

        fetchListings();
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

    return (
        <div style={styles.container} className="flex flex-col min-h-screen">
            <SearchBar />
            <h1 style={styles.header}>Listings</h1>
            <ul className="flex flex-wrap justify-center gap-5 p-4">
                {listings.map((listing) => (
                <ListingFrame key={listing._id} item={listing} />
            ))}
            </ul>
        </div>
    );
}
