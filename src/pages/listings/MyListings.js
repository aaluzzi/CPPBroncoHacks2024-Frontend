import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListingFrame from './ListingFrame'; // Ensure this is the correct path to your component
import './MyListings.css'; // Assuming you create a CSS file for styles
import SearchBar from "../../SearchBar";

function MyListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:3001/my/listings', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setListings(response.data);
      } catch (error) {
        console.error('Failed to fetch listings:', error);
      }
    };

    fetchListings();
  }, []);

  if (listings.length === 0) {
    return <div className="listings-container">No listings found or loading...</div>;
  }
  const styles = {
    header: {
        color: '#1e293b',
        padding: '20px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#f0f8ff', // A light background color to complement the theme
    },
    container: {
        backgroundColor: '#f0f8ff', // Consistent with the header for a cohesive look
    },
};


  return (
    <div style={styles.container} className="flex flex-col min-h-screen">
            <SearchBar />
            <h1 style={styles.header}>My Listings</h1>
            <ul className="flex flex-wrap justify-center gap-5 p-4">
                {listings.map((listing) => (
                <ListingFrame key={listing._id} item={listing} />
            ))}
            </ul>
        </div>
  );
}

export default MyListings;
