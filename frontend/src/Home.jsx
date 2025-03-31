import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import logo2 from './assets/logo123.png';
import heroImage from './assets/hero-image.jpg';

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
                    <img src={logo2} alt="PykPyk logo" style={{ height: '55px', objectFit: 'contain' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span className="nav-link">O nas</span>
                    <span className="nav-link">Kontakt</span>
                    <span className="nav-link" onClick={() => navigate('/kurier')}>Zostań Kurierem</span>

                    <span className="nav-link">Partnerzy</span>

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

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: '120px',
                paddingLeft: '200px',
                gap: '40px'
            }}>
             
                <img
                    src={heroImage}//png burger zdj plis
                    alt="Hero"
                    style={{
                        width: '300px',
                        height: 'auto',
                        borderRadius: '20px',
                        objectFit: 'cover'
                    }}
                />

              
                <div>
                    <h1 style={{
                        fontSize: '64px',
                        fontWeight: 'bold',
                        color: '#000',
                        lineHeight: 1.2,
                        marginBottom: '20px'
                    }}>
                        Dostawa jedzenia i<br />
                        nie tylko
                    </h1>
                    <p style={{
                        fontSize: '20px',
                        color: '#000',
                        margin: 0
                    }}>
                        Supermarkety, sklepy, apteki – wszystko, czego potrzebujesz!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;

