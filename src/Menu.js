import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/LOGO.png'

import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';


function Menu() {
  const { isAuthenticated, userInfo, logout } = useAuth();

  const navigate = useNavigate();

  if (isAuthenticated) {
    return (
      <nav className="p-4 bg-gray-200 hover:w-40 w-16 truncate transition-all ease-out duration-300">
        <ul className="flex flex-col gap-7 p-3 h-full">
          <li>
            <img className='w-10 h-10' src={logo} ></img>
          </li>
          <li>
            <Link to="/listings">Home</Link>
          </li>
          <li>
            <Link to={`/listings/${userInfo?.username}`}>My Listings</Link>
          </li>
          <li className='self-baseline'>
            <button onClick={() => {
              logout();
              navigate('/listings');
            }}>Sign out</button>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="p-4 bg-gray-200 hover:w-40 w-16 truncate transition-all ease-out duration-300">
        <ul className="flex flex-col gap-7 p-3 h-full">
          <li>
            <img className='w-10 h-10' src={logo} ></img>
          </li>
          <li>
            <Link to="/listings">Home</Link>
          </li>
          <li className='self-baseline'>
            <Link to="/signin">Sign in</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
}

export default Menu;
