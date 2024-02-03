import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home/Home';
import Listings from './pages/listings/Listings';
import SignIn from './pages/signin/SignIn';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route path="/listings" element={ <Listings />} />
          <Route path="/signin" element={ <SignIn />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
