import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../AuthProvider';

function ListingDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [owner, setOwner] = useState(null);

  const { userInfo, userToken } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemResponse = await axios.get(`http://localhost:3001/items/${id}`);
        setItem(itemResponse.data);
        const userResponse = await axios.get(`http://localhost:3001/user/profile/${itemResponse.data.sellerId}`);
        setOwner(userResponse.data);
      } catch (err) {
        console.error('Error fetching item details:', err);
      }
    };

    fetchItem();
  }, [id]);

  const sellItem = async () => {
    try {
      //TODO mark as sold instead
      await axios.delete(`http://localhost:3001/items/${id}`, { headers: {
        'Authorization': `Bearer ${userToken}`,
      }});
      navigate('/listings');
    } catch (ex) {

    }
  };

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
      backgroundColor: 'gainsboro',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: adds a subtle shadow for depth
      width: '80%', // Adjust width as per your layout needs
      maxWidth: '800px', // Ensures the container is not too wide on larger screens
      margin: '20px auto', // Centers the ;lzcontainer with margin on top and bottom
    },
    image: {
      maxWidth: '100%',
      borderRadius: '8px',
      marginBottom: '20px',
      aspectRatio: '1',
      objectFit: 'cover',
    },
    title: {
      fontSize: '2em',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: themeColors.green, // Yellow title color
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
  
  if (!item || !owner) {
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

      <p style={styles.detail}><b>Seller:</b> {owner.username}</p>
      {userInfo && owner.email === userInfo.email 
      ? 
        <button onClick={() => sellItem()}>Mark as Sold</button>
      :
      <>
        <p style={styles.detail}>Interested in buying?</p>
        <p style={styles.detail}><b>Contact:</b> {owner.email}</p>
      </>
      }
    </div>
  );
}

export default ListingDetail;
 