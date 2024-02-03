import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home/Home';
import Listings from './pages/listings/Listings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route path="/listings" element={ <Listings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
