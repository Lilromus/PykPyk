import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home_logged.css';
import logo2 from './assets/logo123.png';
import userIcon from './assets/userIcon.png';
import burger from './assets/burger_test.webp';

function HomeLogged() {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = () => navigate('/');
  const toggleDropdown = () => setDropdownVisible(v => !v);

  const products = [
    { name: "McDonald's",     img: burger, time: '25-35 min', fee: 'Free', category: 'American'},
    { name: 'KFC',            img: burger, time: '20-30 min', fee: 'Free', category: 'American'},
    { name: 'Dooner Kebab', img: burger, time: '30-40 min', fee: 'Free', category: 'Kebab'},
    // mozna dodac wiecej
  ];

  return (
    <div className="home-logged-page">
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
            fill="none"
          >
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

        <section className="content">
          <div className="search-main">
            <input
              type="text"
              className="search-input main-search"
              placeholder="What can we get you?"
            />
          </div>

          <h2 className="section-title">Wszystkie restauracje</h2>

        <div className='main-grid'>

          <div className='filtres-panel'>
            <h4>Popular filtres</h4>
              <div className="filter-item">American</div>
              <div className="filter-item">Pizza</div>
              <div className="filter-item">Asian</div>
              <div className="filter-item">Kebab</div>
              <div className="filter-item">Bakery</div>
              <div className="filter-item">Desserts</div>     
          </div>

          <div className="products-grid">
            {products.map(prod => (
              <div className="product-card" key={prod.name}>
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h5 className="product-name">{prod.name}</h5>
                  <p className="product-details">{prod.fee} · {prod.time}</p>
                  <div className="product-meta">
                    <span className="category">{prod.category}</span>
                    <span className="rating">{prod.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
    </div>
  );
}

export default HomeLogged;
