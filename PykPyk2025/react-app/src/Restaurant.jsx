import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Restaurant.css';

import logo2 from './assets/logo123.png'
import userIcon from './assets/userIcon.png';

import McCover from './assets/McDonald_Blurred_cover.jpg'
import KfcCover from './assets/KFC_Blurred_cover.jpg'
import DonerCover from './assets/DonerKebab_Blurred_cover.jpg'
import AsianCover from './assets/AsianHoanmy_Blurred_cover.jpg'
import DominoCover from './assets/Dominos_Blurred_cover.jpg'

export const coverImages = {
    "mcdonald-s": McCover,
    "kfc":        KfcCover,
    "d-ner-kebab": DonerCover,
    "asia-hoanmy": AsianCover,
    "domino-s-pizza": DominoCover,
  };

export default function Restaurant() {
  const { restaurantId } = useParams();
  const navigate     = useNavigate();

  const headerImg = coverImages[restaurantId] || coverImages['default'];

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible(v => !v);
  const handleLogout   = () => navigate('/'); 

  const menu = [
    // menu
  ];
  const [query, setQuery] = useState('');
  const visibleItems = menu.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
    <div className='restaurant-page'>
        <header className="navbar">
        <img src={logo2} alt="PykPyk Logo" className="logo" />

        <div className="user-menu" onClick={toggleDropdown}>
          <img src={userIcon} alt="User" className="user-icon" />
          <span className="user-name">Admin</span>
          <svg
            className={`arrow ${dropdownVisible ? 'open' : ''}`}
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth="2"
            fill="none">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          {dropdownVisible && (
            <div className="dropdown">
              <div className="dropdown-item" onClick={() => navigate('/editprofile')}>
                Edytuj profil
              </div>
              <div className="dropdown-item logout" onClick={handleLogout}>
                Wyloguj się
              </div>
            </div>
          )}
        </div>
      </header>

      <div className='rest-header-bg' style={{ backgroundImage: `url(${headerImg})` }}/>


    </div>
    </>
  );
}
