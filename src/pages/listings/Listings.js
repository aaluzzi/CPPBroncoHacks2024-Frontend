
import axios from 'axios';
import SearchBar from "../../SearchBar";
import { useState, useEffect } from 'react';
import ListingFrame from '../listings/ListingFrame'

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
        <div className="flex flex-col bg-gray-100">
          <SearchBar />
          <h1 className="text-xl font-bold p-5">Listings</h1>
          <ul className="flex flex-wrap w-full gap-5 p-4">
            {listings.map((listing) => (
              <ListingFrame item={listing} />
              
            ))}
          </ul>
        </div>
      );
}