import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Adjust the import path as needed
import ListingFrame from './ListingFrame'; // Component to display each item

function ListingsPage() {
  const [items, setItems] = useState([]);

  // Function to update the items state with search results
const handleSearchResult = (data) => {
    // Logic to handle search result
    console.log(data);
  };
  

  return (
    <div>
      <SearchBar onSearchResult={handleSearchResult} />
      <div>
        {items.length > 0 ? (
          items.map((item) => (
            <ListingFrame key={item._id} item={item} />
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
}

export default ListingsPage;
