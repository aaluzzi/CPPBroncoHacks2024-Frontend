import React from 'react';
import { useParams } from 'react-router-dom';

function ListingDetail() {
  const { id } = useParams(); // Get the ID from the URL

  const listingDetails = {}; //fetch from id

  return (
    <div>
      <h2>Listing Details</h2>
      <p>ID: {id}</p>
      {/* Display listing details */}
    </div>
  );
}

export default ListingDetail;