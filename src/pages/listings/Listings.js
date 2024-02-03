import { Link } from "react-router-dom";
import axios from 'axios';
import SearchBar from "../../SearchBar";
import { useState, useEffect } from 'react';

export default function Listings() {
    const [listings, setListings] = useState([]);
    useEffect(() => {
      const fetchListings = async () => {
          try {
              const response = await axios.get('http://localhost:3001/items');
              setListings(response.data);
          } catch (err) {
          }
      };

      fetchListings();
  }, []); // The empty array ensures this effect runs once on mount


      return (
        <div>
          <SearchBar />
          <h1 className="text-xl font-bold">Listings</h1>
          <ul>
            {listings.map((listing) => (
              <li key={listing.id}>
                <Link to={`/listing/${listing._id}`}>{listing.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
}