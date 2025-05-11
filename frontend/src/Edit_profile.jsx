import React, { useState } from 'react';
import './EditProfile.css';
import { useNavigate } from 'react-router-dom';
import logo2 from './assets/logo123.png';
import userIcon from './assets/userIcon.png';

function EditProfile() {
  const [name, setName] = useState('Admin');
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleSave = () => {
    alert('Zapisano zmiany!');
    navigate('/home');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      {/* Pasek nawigacyjny */}
      <div style={{
        width: '100vw',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 30px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999,
        boxSizing: 'border-box'
      }}>
        <div>
          <img src={logo2} alt="PykPyk logo" style={{ height: '55px', objectFit: 'contain' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                backgroundColor: '#efb541',
                padding: '6px 12px',
                borderRadius: '999px',
              }}
              onClick={toggleDropdown}>
              <img src={userIcon} alt="User" style={{ height: '24px' }} />
              <span style={{ color: '#000', fontWeight: 'bold' }}>Admin</span>
              <svg
                style={{
                  width: '14px',
                  height: '14px',
                  transition: 'transform 0.3s ease',
                  transform: dropdownVisible ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {dropdownVisible && (
              <div
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: 0,
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  zIndex: 1000,
                  minWidth: '150px',
                }}>
                <div
                  onClick={() => navigate('/editprofile')}
                  style={{
                    padding: '10px 15px',
                    cursor: 'pointer',
                    color: '#333'
                  }}>
                  Edytuj profil
                </div>
                <div
                  onClick={handleLogout}
                  style={{
                    padding: '10px 15px',
                    cursor: 'pointer',
                    borderTop: '1px solid #eee',
                    color: '#e53935'
                  }}>
                  Wyloguj się
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Zawartość strony */}
      <main className="edit-profile-container">
        <div className="edit-header">   
          <h2>Account</h2>
        </div>

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
          <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="save-button" onClick={handleSave}>
          Zapisz zmiany
        </button>
      </main>
    </>
  );
}

export default EditProfile;
