import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/LOGO.png';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import './Menu.css'; // Create a Menu.css file for styling

function Menu() {
  const { isAuthenticated, userInfo, logout } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return (
      <nav className="menu-container">
        <ul className="menu-list">
          <li>
            <img className='logo' src={logo} alt="Logo" />
          </li>
          <li>
            <Link to="/listings">Home</Link>
          </li>
          <li>
            <Link to="/my/listings">My Listings</Link>
          </li>
          <li>
            <Link to="/listing/create">Create Listing</Link>
          </li>
          <li>
            <Link to="/user/profile">My Profile</Link>
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
      <nav className="menu-container">
        <ul className="menu-list">
          <li>
            <img className='logo' src={logo} alt="Logo" />
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
