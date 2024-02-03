import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="p-4 bg-gray-200">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/listings">Listings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
