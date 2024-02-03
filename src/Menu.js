import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/LOGO.png'

function Menu() {
  return (
    <nav className="p-4 bg-gray-200 hover:w-40 w-16 truncate transition-all ease-out duration-300">
      <ul className="flex flex-col gap-7 p-3 h-full">
        <li>
          <img className='w-10 h-10'src={logo} ></img>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/listings">My Listings</Link>
        </li>
        <li className='self-baseline'>
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
