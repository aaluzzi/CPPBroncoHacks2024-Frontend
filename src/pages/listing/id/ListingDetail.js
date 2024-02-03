import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ListingDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/items/${id}`);
        setItem(response.data);
      } catch (err) {
        console.error('Error fetching item details:', err);
      }
    };

    fetchItem();
  }, [id]);

  // Define theme colors and styles
  const themeColors = {
    yellow: '#FFD700',
    green: '#008000',
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
      color: themeColors.green, // Green text color
      backgroundColor: '#f0f8ff', // Light background color for better readability
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: adds a subtle shadow for depth
      width: '80%', // Adjust width as per your layout needs
      maxWidth: '800px', // Ensures the container is not too wide on larger screens
      margin: '20px auto', // Centers the container with margin on top and bottom
      backgroundImage: 'url(https://files.123freevectors.com/wp-content/original/169498-shiny-abstract-black-green-and-yellow-background-vector.jpg)',
    },
    image: {
      maxWidth: '600px',
      borderRadius: '8px',
      marginBottom: '20px',
    },
    title: {
      fontSize: '2em',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: themeColors.yellow, // Yellow title color
    },
    description: {
      fontSize: '1.2em',
      marginBottom: '10px',
    },
    detail: {
      fontSize: '1em',
      marginBottom: '5px',
    },
  };
  
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Listing Details</h2>
      {item.images && item.images.length > 0 && (
        <img src={item.images[0]} alt={item.title} style={styles.image} />
      )}
      <h3 style={styles.title}>{item.title}</h3>
      <p style={styles.description}>{item.description}</p>
      <p style={styles.detail}><b>Price:</b> ${item.price}</p>
      <p style={styles.detail}><b>Category:</b> {item.category}</p>
      {/* Add more item details here */}
    </div>
  );
}

export default ListingDetail;
