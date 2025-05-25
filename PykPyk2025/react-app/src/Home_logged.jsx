import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home_logged.css';

import logo2 from './assets/logo123.png';
import userIcon from './assets/userIcon.png';

import americanLogo from './assets/American_section_logo.png'
import pizzaLogo from './assets/Pizza_section_logo.png'
import asianLogo from './assets/Asian_section_logo.png'
import kebabLogo from './assets/Kebabe_section_logo.png'

import searchLogo from './assets/Search_logo.svg'
import deliveryLogo from './assets/Delievery_logo.svg'
import ratingLogo from './assets/Rating_logo.png'

import Mac_cover from './assets/McDonald_cover.png'
import KFC_cover from './assets/KFC_cover.png'
import Dominos_cover from './assets/Dominos_cover.png'
import DonerKebab_cover from './assets/DonerKebab_cover.png'
import AsianHoanmy_cover from './assets/AsianHoanmy_cover.png'

import ytlogo from './assets/youtube.png';
import twitterlogo from './assets/twitterlogo.png';
import facebooklogo from './assets/facebooklogo.png';
import instagramlogo from './assets/instagramlogo.png';
import phoneLogo from './assets/phonelogo.png'
import emailLogo from './assets/email.png'
import googlemapsLogo from './assets/googlemaps.png'

function HomeLogged() {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState(null);

  const [searchTerm, setSearchTerm] = useState('')

  const handleLogout = () => navigate('/');
  const toggleDropdown = () => setDropdownVisible(v => !v);

  //tablica z filtrami
  const filters = [
    {label: 'American', icon: americanLogo},
    {label: 'Pizza', icon: pizzaLogo},
    {label: 'Asian', icon: asianLogo},
    {label: 'Kebab', icon: kebabLogo},
  ];

  const otherLogo = [
    {label: 'Rating', icon: ratingLogo},
    {label: 'Delievery', icon: deliveryLogo},
  ]

  //tablica z restauracjami 
  const products = [
    { name: "McDonald's",img: Mac_cover, time: '25-35 min', fee: '2,99 zł', category: 'American', rating: { percent: '96%', count: 188 }},
    { name: 'KFC',img: KFC_cover, time: '20-30 min', fee: '2,99 zł', category: 'American', rating: { percent: '96%', count: 188 }},
    { name: 'Döner Kebab', img: DonerKebab_cover, time: '30-40 min', fee: '2,99 zł', category: 'Kebab', rating: { percent: '96%', count: 188 }},
    { name: 'Asia Hoanmy', img: AsianHoanmy_cover, time: '30-40 min', fee: '4,99 zł', category: 'Asian', rating: { percent: '96%', count: 188 }},
    { name: "Domino's Pizza", img: Dominos_cover, time: '30-40 min', fee: 'Free', category: 'Pizza', rating: { percent: '96%', count: 188 }},
    // mozna dodac wiecej
  ];

  
  //działania filtrów 
  let filteredProducts = products;
  if(selectedFilter)
  {
    filteredProducts = products.filter(p => p.category === selectedFilter); 
  }

  if(searchTerm.trim() !== '')
  {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="home-logged-page">
      {/*Nawigacja*/}
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
      {/*Wyszukiwarka*/}
      <section className="content">
        <div className="search-main">
          <img src={searchLogo} className='search-icon' alt='Search'/>
            <input 
            type="text" 
            className="search-input main-search" 
            placeholder="What can we get you?"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}/>
        </div>
        {/*TODO: NAPRAWIC WYSZUKIWARKE bo gdy sie wpisuje byle co to strona sie ROZPIERDALA*/}

        <div className='main-grid'>
        {/*Filty*/}
          <div className='filtres-panel'>
            <h4>Filtry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </h4>
            {filters.map(f => {
            const isActive = selectedFilter === f.label;
            return (
              <div key={f.label} className={`filter-item${isActive ? ' active' : ''}`} 
              onClick={() =>
                setSelectedFilter(prev =>
                  prev === f.label ? null : f.label
                )}>
                <div className={`filter-icon-wrapper${isActive ? ' active' : ''}`}>
                  <img src={f.icon} alt={`${f.label} icon`} className="filter-icon"/>
                </div>
                <span className="filter-label">{f.label}</span>
              </div>
            );
          })} 
          </div>
         {/* Restauracje */}
        <div className="products-grid">
          {filteredProducts.length > 0
            ? filteredProducts.map((prod) => {
              const slug = prod.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');

        return (
          <div className="product-card" key={prod.name} onClick={() => navigate(`/home/${slug}`)} style={{ cursor: 'pointer' }}>
            <div className="product-image-wrapper">
              <img src={prod.img} alt={prod.name} className="product-image"/>

              <div className="rating-badge">
                <img src={ratingLogo} alt="Rating" className="rating-icon" style={{ width: 16, height: 16 }}/>
                <span className="rating-percent">
                  {prod.rating.percent}
                </span>
                <span className="rating-count">
                  ({prod.rating.count})
                </span>
              </div>
            </div>
            <div className="product-info">
              <h5 className="product-name">{prod.name}</h5>
              <p className="product-details">
                <img
                  src={deliveryLogo}
                  alt="Delivery"
                  className="delivery-icon" style={{ width: 16, height: 16 }}/>{' '}{prod.fee} · {prod.time}
              </p>
              <div className="product-meta">
                <span className="category">{prod.category}</span>
              </div>
            </div>
          </div>
        );
      })
    : 
      Array(6)
        .fill(null)
        .map((_, i) => (
          <div
            className="product-card placeholder"
            key={`empty-${i}`}
          />
      ))
  }
</div>

        </div>
        </section>

        <footer style={{
        backgroundColor: '#1A1A1A',
        padding: '40px 20px',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        fontSize: '14px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <img src={logo2} alt="PykPyk logo" style={{ height: '55px', objectFit: 'contain', marginBottom: '10px'}} />
          <p style={{
            fontSize: '16px',
            fontWeight: '500',
            marginBottom: '20px'
          }}>
           Ułatwiamy dostęp do wszystkiego w Twoim mieście
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px'}}>
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
          <img src={ytlogo} alt="YouTube" style={{ height: '20px', objectFit: 'contain' }} /> </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src={twitterlogo} alt="Twitter" style={{ height: '20px', objectFit: 'contain' }} /> </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={facebooklogo} alt="Facebook" style={{ height: '20px', objectFit: 'contain' }} /> </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagramlogo} alt="Instagram" style={{ height: '20px', objectFit: 'contain' }} /> </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: '#ccc' }}>
        <h3 style={{ fontWeight: 'bold', marginBottom: '10px', color: '#fff', fontSize: '16px' }}>Kontakt</h3>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img
              src={phoneLogo}
              alt="Phone"
              style={{ height: '20px', objectFit: 'contain', marginRight: '10px' }}/>
            <span style={{ fontSize: '14px' }}>+48 123 456 789</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img
                src={emailLogo}
                alt="Email"
                style={{ height: '20px', objectFit: 'contain', marginRight: '10px' }}/>
              <span style={{ fontSize: '14px' }}>pykpyk_contact@pyk.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a href="https://google.com/maps/" target='_blank' rel="noopener noreferrer">
                <img
                  src={googlemapsLogo}
                  alt="GoogleMaps"
                  style={{ height: '20px', objectFit: 'contain', marginRight: '10px' }}/>
                </a>
                <span style={{ fontSize: '14px' }}>ul. Mikołaja Reja 25, 80-870 Gdańsk</span>
              </div>
        </div>
      <div>
        <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Top kategorie</h3>
          <p>Kebab</p>
          <p>Pizza</p>
          <p>Burgers</p>
      </div>
    </footer>
  </div>
    
  );
}

export default HomeLogged;