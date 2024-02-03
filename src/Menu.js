import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/LOGO.png';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const { isAuthenticated, userInfo, logout } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return (
      <nav className="menu-container">
        <ul className="menu-list">
          <li className="menu-item">
            <img className='logo' src={logo} alt="Logo" />
          </li>
          <li className="menu-item">
            <Link to="/listings">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/my/listings">My Listings</Link>
          </li>
          <li className="menu-item">
            <Link to="/listing/create">Create Listing</Link>
          </li>
          <li className="menu-item">
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
          <li className="menu-item">
            <img className='logo' src={logo} alt="Logo" />
          </li>
          <li className="menu-item">
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
