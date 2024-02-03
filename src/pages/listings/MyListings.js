import './MyListings.css'; // Assuming you create a CSS file for styles

import { useAuth } from '../../AuthProvider';
import Listings from './Listings';

function MyListings() {
  const { userInfo } = useAuth();

  return (
    <Listings sellerId={userInfo._id} />
  );
}

export default MyListings;
