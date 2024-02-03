import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListingFrame from './ListingFrame'; // Ensure this is the correct path to your component
import './MyListings.css'; // Assuming you create a CSS file for styles

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

  return (
    <div>
      <h1 className="listings-title">My Listings</h1>
      <div className="listings-container">
        {listings.map(listing => (
          <ListingFrame key={listing._id} item={listing} />
        ))}
      </div>
    </div>
  );
}

export default MyListings;
