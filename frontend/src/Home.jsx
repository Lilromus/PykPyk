import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                display: 'flex',
                gap: '10px'
            }}>
                <button
                    onClick={() => navigate('/login')}
                    style={{
                        padding: '8px 20px',
                        border: '2px solid #007bff',
                        backgroundColor: 'transparent',
                        color: '#007bff',
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
                        padding: '8px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '999px', 
                        fontSize: '14px',
                        cursor: 'pointer'
                    }}
                >
                    Rejestracja
                </button>
            </div>
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
             <h1>Witaj w PykPyk</h1>
            </div>

        </div>
    );
}

export default Home;
