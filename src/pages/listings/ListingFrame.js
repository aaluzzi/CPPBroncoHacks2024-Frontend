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
            width: '300px', // Adjust width as needed
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            margin: '10px',
            transition: 'transform 0.2s', // Smooth transition for hover effect
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            backgroundImage: 'url(https://files.123freevectors.com/wp-content/original/169498-shiny-abstract-black-green-and-yellow-background-vector.jpg)',
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
            color: themeColors.green, // Uses the theme green for titles
            margin: '10px 0 5px 0',
        },
        price: {
            fontSize: '1rem',
            color: themeColors.yellow, // Uses the theme yellow for price
        }
    };

    return (
        <Link to={`/listing/${item._id}`} style={styles.link}>
            <li style={styles.listItem} key={item.id}>
                <img style={styles.image} src={item.images[0]} alt={item.title} />
                <h1 style={styles.title}>{item.title}</h1>
                <h2 style={styles.price}>$ {item.price}</h2>
            </li>
        </Link>
    );
}
