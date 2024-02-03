import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthProvider.js'; // Make sure this path is correct

function UserProfile() {
  const { token } = useAuth(); // Get the auth token
  const [user, setUser] = useState(null);
  const [listings, setListings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        // Adjusted to the new route that doesn't require passing an ID
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

  if (error) return <div>{error}</div>;
  if (!user) return <div>Loading profile...</div>;

  return (
    <div>
      <h2>{user.username}'s Profile</h2>
      {/* Display user info */}
      {listings.length > 0 ? (
        listings.map((listing) => (
          <div key={listing._id}>
            <h3>{listing.title}</h3>
            {/* Display other listing details here */}
          </div>
        ))
      ) : (
        <p>No listings found.</p>
      )}
    </div>
  );
}

export default UserProfile;
