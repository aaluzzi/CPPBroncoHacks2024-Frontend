import React from 'react';
import { Link } from "react-router-dom";

export default function ListingFrame({ item }) {
    // Define theme colors and styles
    const themeColors = {
        yellow: '#FFD700',
        green: '#008000',
    };

    const styles = {
        link: {
            textDecoration: 'none', // Removes underline from links
        },
        listItem: {
            padding: '20px',
            width: '250px', // Adjust width as needed
            backgroundColor: 'gainsboro',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            margin: '10px',
            transition: 'transform 0.2s', // Smooth transition for hover effect
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            
        },

        image: {
            width: '100%', // Ensures image covers the width
            aspectRatio: '1', // Keeps images square
            objectFit: 'cover', // Ensures the image covers the area without stretching
            borderRadius: '8px', // Rounds the corners of the images
        },
        title: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#1e293b', // Uses the theme green for titles
            margin: '10px 0 5px 0',
        },
        price: {
            fontSize: '1rem',
            color: '#1e293b', // Uses the theme yellow for price
        }
    };

    return (
        <Link to={`/listing/${item._id}`} style={styles.link}>
            <li class="listing-container"style={styles.listItem} key={item.id}>
                <img style={styles.image} src={item.images[0]} alt={item.title} />
                <div className='flex w-full justify-between'>
                    <div className='flex items-start flex-col'>
                        <h1 style={styles.title}>{item.title}</h1>
                        <h2 style={styles.price}>$ {item.price}</h2>
                    </div>
                    <button className='h-10 justify-center'>Buy</button>
                </div>
            </li>
        </Link>
    );
}
