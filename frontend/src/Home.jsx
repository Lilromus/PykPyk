import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import logo2 from './assets/logo2.png'

function Home() {
    const navigate = useNavigate();

    return (
        <div style={{ margin: 0, padding: 0 }}>
            <div style={{
                width: '100vw',
                backgroundColor: '#FFA500',
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
                    <img src={logo2} alt="PykPyk logo" style={{ height: '35px', objectFit: 'contain' }} />
                </div>


                
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span className="nav-link">Kontakt</span>
                    <span className="nav-link">Zostań Kurierem</span>
                    <span className="nav-link">Centrum pomocy</span>
                    <span className="nav-link">Oferty</span>

                    <button
                        onClick={() => navigate('/login')}
                        style={{
                            padding: '8px 16px',
                            border: '2px solid white',
                            backgroundColor: 'transparent',
                            color: 'white',
                            borderRadius: '999px',
                            fontSize: '14px',
                            cursor: 'pointer'
                        }}
                    >
                        Logowanie
                    </button>
                    <button
                        onClick={() => navigate('/signup')}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'white',
                            color: '#FFA500',
                            border: 'none',
                            borderRadius: '999px',
                            fontSize: '14px',
                            cursor: 'pointer'
                        }}
                    >
                        Rejestracja
                    </button>
                </div>
            </div>

            
            <div style={{ textAlign: 'center', marginTop: '100px' }}>
                <h1>Witaj w PykPyk</h1>
            </div>
        </div>
    );
}

export default Home;
