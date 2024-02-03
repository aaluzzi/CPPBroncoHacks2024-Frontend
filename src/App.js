import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home/Home';
import Listings from './pages/listings/Listings';
import SignIn from './pages/signin/SignIn.js';
import { AuthProvider } from './AuthProvider.js';
import ListingDetail from './pages/listings/id/ListingDetail.js';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/listings/:id" element={<ListingDetail />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
