import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Listings from './pages/listings/Listings';
import SignIn from './pages/signin/SignIn.js';
import { AuthProvider } from './AuthProvider.js';
import ListingDetail from './pages/listing/id/ListingDetail.js';
import SignUp from './pages/signup/SignUp.js';
import CreateListing from './pages/listing/create/CreateListing.js';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Listings />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/listings/:username" element={<Listings />} />
            <Route path="/listing/:id" element={<ListingDetail />} />
            <Route path="/listing/create" element={<CreateListing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
