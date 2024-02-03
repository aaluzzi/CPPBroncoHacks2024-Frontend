import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthProvider.js'; // Verify the path correctness
import './UserProfile.css'; // Import the CSS file

function UserProfile() {
  const { userInfo } = useAuth();


  if (!userInfo) return <div className="loading-message">Loading profile...</div>;

  return (
    <div className="user-profile-container">
      <h2 className="profile-header">{userInfo.username}</h2>
      <h2 className="profile-header">{userInfo.email}</h2>
    </div>
  );
}

export default UserProfile;
