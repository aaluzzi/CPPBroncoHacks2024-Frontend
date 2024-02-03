import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="p-4 bg-gray-200 hover:w-auto w-1.5 truncate transition-all ease-out duration-300">
      <ul className="flex flex-col gap-7 p-3 h-full">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/listings">Listings</Link>
        </li>
        <li className='self-baseline'>
          <Link to="/signin">signin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
