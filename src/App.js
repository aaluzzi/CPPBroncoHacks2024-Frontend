import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Listings from './pages/listings/Listings';
import SignIn from './pages/signin/SignIn.js';
import { AuthProvider } from './AuthProvider.js';
import ListingDetail from './pages/listing/id/ListingDetail.js';
import SignUp from './pages/signup/SignUp.js';
import CreateListing from './pages/listing/create/CreateListing.js';
import MyListings from './pages/listings/MyListings';
import UserProfile from './UserProfile'; // Adjust the import path as needed
import React from 'react';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Listings />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/my/listings" element={<MyListings />} />
            <Route path="/listing/:id" element={<ListingDetail />} />
            <Route path="/listing/create" element={<CreateListing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user/profile" element={<UserProfile />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
