import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

function Home_logged() {
  const navigate = useNavigate();

  const handleLogout = () => {  
    navigate('/');
  };

  return (
    <div className="home-logged-container">
      <h1>Witaj ponownie!</h1>
      <p>Jesteś zalogowany do systemu. Możesz teraz korzystać z dostępnych funkcji.</p>

      <button className="form-button" onClick={handleLogout}>
        Wyloguj się
      </button>
    </div>
  );
}

export default Home_logged;
