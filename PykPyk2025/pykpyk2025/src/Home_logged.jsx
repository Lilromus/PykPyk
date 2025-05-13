import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home_logged.css';
import logo2 from './assets/logo123.png';
import userIcon from './assets/userIcon.png';

function HomeLogged() {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = () => navigate('/');
  const toggleDropdown = () => setDropdownVisible(prev => !prev);

  return (
    <div className="home-logged-page">
      <header className="navbar">
        <img src={logo2} alt="Logo" className="logo" />
        <div className="user-menu" onClick={toggleDropdown}>
          <img src={userIcon} alt="User" className="user-icon" />
          <span className="user-name">Admin</span>
          <svg className={`arrow ${dropdownVisible ? 'open' : ''}`} viewBox="0 0 24 24" stroke="black" strokeWidth="2" fill="none">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          {dropdownVisible && (
            <div className="dropdown">
              <div className="dropdown-item" onClick={() => navigate('/editprofile')}>Edytuj profil</div>
              <div className="dropdown-item logout" onClick={handleLogout}>Wyloguj się</div>
            </div>
          )}
        </div>
      </header>

      <main className="home-logged-container">
        <h1>Witaj ponownie!</h1>
        <p>Jesteś zalogowany do systemu. Możesz teraz korzystać z dostępnych funkcji.</p>
        <button className="form-button" onClick={handleLogout}>Wyloguj się</button>
      </main>
    </div>
  );
}

export default HomeLogged;
