import React from 'react';

function SearchBar(){
    return (
        <div className='flex w-full justify-center p-3 bg-slate-300'>
            <input className='p-3 w-72 h-10 rounded-lg' placeholder='Search'/>
            
        </div>
    );
}

export default SearchBar;