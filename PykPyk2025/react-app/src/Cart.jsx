import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

import logo2 from './assets/logo123.png';
import userIcon from './assets/userIcon.png';

export default function Cart() {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => setDropdownVisible(v => !v);
  const handleLogout = () => navigate('/');

  return (
    <>
      <header className="navbar">
        <img src={logo2} alt="PykPyk Logo" className="logo" onClick={() => navigate('/home')}/>

        <div className="user-menu" onClick={toggleDropdown}>
          <img src={userIcon} alt="User" className="user-icon" />
          <span className="user-name">Admin</span>
          <svg
            className={`arrow ${dropdownVisible ? 'open' : ''}`}
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth="2"
            fill="none"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          {dropdownVisible && (
            <div className="dropdown">
              <div
                className="dropdown-item"
                onClick={() => navigate('/editprofile')}
              >
                Edytuj profil
              </div>
              <div className="dropdown-item logout" onClick={handleLogout}>
                Wyloguj się
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
