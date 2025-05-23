import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home_logged.css';

import logo2 from './assets/logo123.png';
import userIcon from './assets/userIcon.png';
import burger from './assets/burger_test.webp';

import americanLogo from './assets/American_section_logo.png'
import pizzaLogo from './assets/Pizza_section_logo.png'
import asianLogo from './assets/Asian_section_logo.png'
import kebabLogo from './assets/Kebabe_section_logo.png'
import searchLogo from './assets/Search_logo.svg'

import ratingLogo from './assets/Rating_logo.png'
import delieveryLogo from './assets/Delievery_logo.svg'


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
    {label: 'Delievery', icon: delieveryLogo},
  ]

  //tablica z restauracjami 
  const products = [
    { name: "McDonald's",img: burger, time: '25-35 min', fee: '2,99 zł', category: 'American', rating: { percent: '96%', count: 188 }},
    { name: 'KFC',img: burger, time: '20-30 min', fee: '2,99 zł', category: 'American', rating: { percent: '96%', count: 188 }},
    { name: 'Döner Kebab', img: burger, time: '30-40 min', fee: '1,99 zł', category: 'Kebab', rating: { percent: '96%', count: 188 }},
    { name: 'Thai food', img: burger, time: '30-40 min', fee: '4,99 zł', category: 'Asian', rating: { percent: '96%', count: 188 }},
    { name: "Domino's Pizza", img: burger, time: '30-40 min', fee: '2,99 zł', category: 'Pizza', rating: { percent: '96%', count: 188 }},
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
            onChange={e => setSearchTerm(e.target.value)}
            />
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
          {/*Restauracje*/}
          <div className="products-grid">
            {filteredProducts.map(prod => (
              <div className="product-card" key={prod.name}>
                <div className='product-image-wrapper'>
                <img src={prod.img} alt={prod.name} className="product-image"/>

                <div className='rating-badge'>
                  <img src={ratingLogo} alt='Rating' className='rating-icon'/>
                    <span className='rating-percent'>{prod.rating.percent}</span>
                    <span className="rating-count">({prod.rating.count})</span>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-name">{prod.name}</h5>
                  <p className="product-details"><img src={delieveryLogo} alt="Delievery" className='delievery-icon'/> {prod.fee} {prod.time}</p>
                  <div className="product-meta">
                    <span className="category">{prod.category}</span>
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
