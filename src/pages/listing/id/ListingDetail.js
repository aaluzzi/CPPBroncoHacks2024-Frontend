import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ListingDetail() {
  const { id } = useParams(); // Get the ID from the URL

  const [item, setItem] = useState([]);
  useEffect(() => {
      const fetchItem = async () => {
          try {
              const response = await axios.get(`http://localhost:3001/items/${id}`);
              setItem(response.data);
              console.log(item);
          } catch (err) {
          }
      };

      fetchItem();
  }, []);

  return (
    <div>
      <h2>Listing Details</h2>
      <div>{item.title}</div>
      <div>{item.description}</div>
    </div>
  );
}

export default ListingDetail;