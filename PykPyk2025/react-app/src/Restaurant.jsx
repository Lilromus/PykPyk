import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Restaurant.css';

import logo2 from './assets/logo123.png';
import userIcon from './assets/userIcon.png';

import McCover from './assets/McDonald_Blurred_cover.jpg';
import KfcCover from './assets/KFC_Blurred_cover.jpg';
import DonerCover from './assets/DonerKebab_Blurred_cover.jpg';
import AsianCover from './assets/AsianHoanmy_Blurred_cover.jpg';
import DominoCover from './assets/Dominos_Blurred_cover.jpg';

import McDonal_panel from './assets/McDonald_logo_panel.jpeg';
import KFC_panel from './assets/KFC_logo_panel.jpeg';
import Dominos_panel from './assets/Dominos_logo_panel.jpeg';
import Doner_panel from './assets/DonerKebab_logo_panel.jpeg';
import Asia_panel from './assets/AsiaHoanmy_logo_panel.jpeg';

import Delievery from './assets/Bike_logo.png';
import Clock from './assets/Clock_logo.png';
import Like from './assets/Like_logo.png';
import Discount from './assets/Discount_Logo.png';
import Cosmonaut from './assets/Cosmonaut_order_logo.svg';

import Plus from './assets/Plus.svg';

// McDonald's menu images
import McNuggets from './assets/Mac_produkt1.avif';
import BigMac from './assets/Mac_produkt2.avif';
import HappyMeal from './assets/Mac_produkt3.png';

const restaurantNames = {
  "mcdonald-s": "McDonald's",
  "kfc":        "KFC",
  "d-ner-kebab":"Döner Kebab",
  "asia-hoanmy":"Asia Hoanmy",
  "domino-s-pizza":"Domino's Pizza"
};

const panelImages = {
  "mcdonald-s": McDonal_panel,
  "kfc":        KFC_panel,
  "d-ner-kebab":Doner_panel,
  "asia-hoanmy":Asia_panel,
  "domino-s-pizza":Dominos_panel,
};

export const coverImages = {
  "mcdonald-s": McCover,
  "kfc":        KfcCover,
  "d-ner-kebab":DonerCover,
  "asia-hoanmy":AsianCover,
  "domino-s-pizza":DominoCover,
};

export default function Restaurant() {
  const { restaurantId } = useParams();
  const navigate        = useNavigate();

 
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuQuery, setMenuQuery]             = useState('');


  const isMcDonald = restaurantId === "mcdonald-s";

  
  const mcdonaldMenu = [
    { name: "McNuggets® 20szt + 2x Cheeseburger", img: McNuggets, price: "39,00 zł" },
    { name: "McZestaw Big Mac®",img: BigMac,    price: "31,90 zł" },
    { name: "Happy Meal®", img: HappyMeal, price: "23,50 zł" },
  ];

  
  const visibleItems = mcdonaldMenu.filter(item =>
    item.name.toLowerCase().includes(menuQuery.toLowerCase())
  );


  const toggleDropdown = () => setDropdownVisible(v => !v);
  const handleLogout   = () => navigate('/');

  useEffect(() => {
    document.documentElement.classList.add('restaurant-page-active');
    return () =>
      document.documentElement.classList.remove('restaurant-page-active');
  }, []);

  const headerImg = coverImages[restaurantId] || coverImages['default'];
  const panelImg  = panelImages[restaurantId];

  return (
    <div className='restaurant-page'>
      <header className="navbar">
        <img
          src={logo2}
          alt="PykPyk Logo"
          className="logo"
          onClick={() => navigate('/home')}
        />

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

        <div
          className='rest-banner'
          style={{ backgroundImage: `url(${headerImg})` }}
        />
      </header>

      <div className="rest-panels">
        <div className="restaurant-floating-logo">
          <img
            src={panelImg}
            alt={restaurantId}
            className="rest-main-card_logo"
          />
        </div>

        <div className="rest-main-card">
          <div className="rest-main-card-header">
            <div className="rest-main-card-logoBlock">
              <div className='rest-name-row'>
                <div className="rest-name">
                  {restaurantNames[restaurantId]}
                </div>
                <div className="discount-badge">
                  <span>
                    <img src={Discount} alt="discount" />
                    <strong>-10%</strong> na zamówienia z promokodem "ZSE"
                  </span>
                </div>
              </div>
              <div className="rest-main-card-tags">
                <div className="tag">
                  <span className="icon"><img src={Like} alt="like" /></span>
                  97%
                </div>
                <div className="tag">
                  <span className="icon"><img src={Clock} alt="clock" /></span>
                  15–25m
                </div>
                <div className="tag">
                  <span className="icon"><img src={Delievery} alt="delivery" /></span>
                  2,99 zł
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rest-sidebar-card">
          <h2 className="sidebar-title">Twoje zamówienia</h2>
          <div className="sidebar-empty">
            <img
              src={Cosmonaut}
              alt="Empty Cart"
              className="sidebar-image"
            />
            <p className="sidebar-text">
              Nie dodałeś jeszcze żadnego produktu. Kiedy dodasz, tutaj je zobaczysz
            </p>
          </div>
        </div>
        
      </div>
      {isMcDonald && (
        <div className="rest-menu">
          <div className="menu-search">
            <input
              type="text"
              placeholder="Szukaj w menu…"
              value={menuQuery}
              onChange={e => setMenuQuery(e.target.value)}
            />
          </div>

          <div className="menu-grid">
          {visibleItems.length > 0
            ? visibleItems.map(item => (
            <div className="menu-card" key={item.name}>
              <div className="menu-card-media">
                <img src={item.img} alt={item.name} className="menu-card-img" />
                <p className="menu-card-price">{item.price}</p>
              </div>
              <div className="menu-card-info">
                <h5 className="menu-card-name">{item.name}</h5>
              </div>
              <button className="add-button">
                <img src={Plus} alt="Add to cart" />
              </button>
            </div>
            
          ))
        : Array(3)
            .fill(null)
            .map((_, i) => (
              <div
                className="menu-card placeholder"
                key={`empty-${i}`}
              />
            ))
      }
    </div>
  </div>
)}
    </div>
  );
}
