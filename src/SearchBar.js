import React from 'react';

function SearchBar({ fetchListings }) {

    const themeColors = {
        yellow: '#FFD700',
        green: '#008000',
        slate: '#708090',
    };

    const styles = {
        searchBar: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: themeColors.slate,
        },
        input: {
            width: '240px',
            height: '40px',
            padding: '10px',
            borderRadius: '20px',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        placeholder: {
            color: themeColors.green,
        },
    };

    return (
        <div style={styles.searchBar}>
            <input onChange={(e) => fetchListings((e.target.value))}
                style={styles.input}
                placeholder='Search'
                className='rounded-lg'
            />
        </div>
    );
}

export default SearchBar;
