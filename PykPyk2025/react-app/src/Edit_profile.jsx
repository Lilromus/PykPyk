import React, { useState, useEffect  } from 'react';
import './EditProfile.css';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo123.png';
import userIcon from './assets/userIcon.png';

function EditProfile() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [name, setName] = useState('Admin');
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleSave = () => {
    alert('Zapisano zmiany!');
    navigate('/home');
  };

  const handleLogout = () => navigate('/');
  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  return (
    <div className="edit-profile-page">
      <div className='navbar-margin'>
      <header className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="user-menu" onClick={toggleDropdown}>
          <img src={userIcon} alt="User" className="user-icon" />
          <span>Admin</span>
          <svg className={`arrow ${dropdownVisible ? 'open' : ''}`} viewBox="0 0 24 24" stroke="black" strokeWidth="2" fill="none">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          {dropdownVisible && (
            <div className="dropdown">
              <div onClick={handleLogout}>Wyloguj się</div>
            </div>
          )}
        </div>
      </header>
      </div>

      <main className="edit-profile-container">
        <h2>Konto</h2>
        <div className="edit-field">
          <label>Login</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="edit-field">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="edit-field">
          <label>Hasło</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="save-button" onClick={handleSave}>Zapisz zmiany</button>
      </main>
    </div>
  );
}

export default EditProfile;
