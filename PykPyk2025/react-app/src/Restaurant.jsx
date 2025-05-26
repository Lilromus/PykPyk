import React, { useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Restaurant.css';

import logo2 from './assets/logo123.png'
import userIcon from './assets/userIcon.png';

import McCover from './assets/McDonald_Blurred_cover.jpg'
import KfcCover from './assets/KFC_Blurred_cover.jpg'
import DonerCover from './assets/DonerKebab_Blurred_cover.jpg'
import AsianCover from './assets/AsianHoanmy_Blurred_cover.jpg'
import DominoCover from './assets/Dominos_Blurred_cover.jpg'

import McDonal_panel from './assets/McDonald_logo_panel.jpeg'
import KFC_panel from './assets/KFC_logo_panel.jpeg'
import Dominos_panel from './assets/Dominos_logo_panel.jpeg'
import Doner_panel from './assets/DonerKebab_logo_panel.jpeg'
import Asia_panel from './assets/AsiaHoanmy_logo_panel.jpeg'

import Delievery from './assets/Bike_logo.png'
import Clock from './assets/Clock_logo.png'
import Like from './assets/Like_logo.png'
import Discount from './assets/Discount_Logo.png'


const restaurantNames = {
  "mcdonald-s": "McDonald's",
  "kfc": "KFC",
  "d-ner-kebab": "Döner Kebab",
  "asia-hoanmy": "Asia Hoanmy",
  "domino-s-pizza": "Domino's Pizza"
};


const panelImages = {
  "mcdonald-s":McDonal_panel,
  "kfc":KFC_panel,
  "d-ner-kebab":Doner_panel,
  "asia-hoanmy":Asia_panel,
  "domino-s-pizza":Dominos_panel,
}

const menu = [];


export const coverImages = {
    "mcdonald-s": McCover,
    "kfc":        KfcCover,
    "d-ner-kebab": DonerCover,
    "asia-hoanmy": AsianCover,
    "domino-s-pizza": DominoCover,
  };

export default function Restaurant() {
    useEffect(() => {
        document.documentElement.classList.add('restaurant-page-active');
        return () => {
          document.documentElement.classList.remove('restaurant-page-active');
        };
    }, []);
  const { restaurantId } = useParams();
  const navigate     = useNavigate();

  const headerImg = coverImages[restaurantId] || coverImages['default'];
  const panelImg = panelImages[restaurantId]

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible(v => !v);
  const handleLogout   = () => navigate('/'); 

  const [query, setQuery] = useState('');
  const visibleItems = menu.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className='restaurant-page'>
        <header className="navbar">
          <img src={logo2} alt="PykPyk Logo" className="logo" onClick={() => navigate('/home')} />
  
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
          <div className='rest-banner' style={{ backgroundImage: `url(${headerImg})` }} />
        </header>
        
        <div className="rest-panels">
        <div className="restaurant-floating-logo">
        <img src={panelImg} alt={restaurantId} className="rest-main-card_logo" />
        </div>
          <div className="rest-main-card">
            <div className="rest-main-card-header">
              <div className="rest-main-card-logoBlock">
                <div className='rest-name-row'>
                <div className="rest-name">
                  {restaurantNames[restaurantId] || restaurantId.replaceAll('-', ' ')}
                </div>
                <div className="discount-badge">
                  <span><img src={Discount}/><strong>-10%</strong> na zamówienia z promokodem "ZSE"</span>
                </div>
                </div>
                <div className="rest-main-card-tags">
                <div className="tag"><span className="icon"><img src={Like} alt="like" /></span>97%</div>
                <div className="tag"><span className="icon"><img src={Clock} alt="clock" /></span>15–25m</div>
                <div className="tag"><span className="icon"><img src={Delievery} alt="delivery" /></span>2,99 zł</div>
              </div>
            </div>

            </div>
          </div>
  
          <div className="rest-sidebar-card">
            dsdsds
          </div>
        </div>
      </div>
    </>
  );
  
} 
