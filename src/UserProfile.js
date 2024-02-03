import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthProvider.js'; // Verify the path correctness
import './UserProfile.css'; // Import the CSS file

function UserProfile() {
  const { userInfo } = useAuth();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const res = await axios.get('http://localhost:3001/user/profile', config);
        setUser(res.data.user);
        setListings(res.data.listings);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        setError('Failed to load profile');
      }
    };

    if (token) fetchUserProfile();
  }, [token]);

  if (error) return <div className="error-message">{error}</div>;
  if (!user) return <div className="loading-message">Loading profile...</div>;

  return (
    <div className="user-profile-container">
      <h2 className="profile-header">{user.username}'s Profile</h2>
      {listings.length > 0 ? (
        listings.map((listing) => (
          <div key={listing._id} className="listing">
            <h3 className="listing-title">{listing.title}</h3>
            {/* Implement additional listing details as needed */}
          </div>
        ))
      ) : (
        <p className="no-listings">No listings found.</p>
      )}
    </div>
  );
}

export default UserProfile;
