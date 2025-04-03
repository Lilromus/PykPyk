import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import logo2 from './assets/logo123.png';
import heroImage from './assets/hero-image.jpg';

function Home() {
    const navigate = useNavigate();

    const brands = [
        { name: "McDonald's", img: 'mcdonalds.jpg' },
        { name: "Sklep Internetowy Biedronka", img: 'biedronka.jpg' },
        { name: "KFC", img: 'kfc.jpg' },
        { name: "Burger King", img: 'burgerking.jpg' }, //TODO: dodac do assetow obrazki zaokraglone do tych restauracji 
        { name: "Pizza Hut", img: 'pizzahut.jpg' }, 
        { name: "Salad Story", img: 'saladstory.jpg' },
        { name: "Pasibus", img: 'pasibus.jpg' },
        { name: "Thai Wok", img: 'thaiwok.jpg' }
    ];

    return (
        <div style={{ margin: 0, padding: 0 }}>
            {/* Nawigacja */}
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

            {/* Sekcja główna */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '400px',
                paddingLeft: '50px',
                paddingRight: '50px',
                gap: '40px',
                minHeight: '100vh', 
            }}>

                <img
                    src={heroImage}
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

            {/* Sekcja restauracji */}
            <div style={{
                backgroundColor: 'white',
                padding: '60px 20px',
                textAlign: 'center',
                minHeight: '500px',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)'
            }}>
                <h2 style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    marginBottom: '40px'
                }}>
                    Polska: popularne restauracje i nie tylko
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '40px',
                    justifyItems: 'center',
                    width: '100%',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {brands.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center', width: '140px' }}>
                            <img
                                src={`/assets/${item.img}`}
                                alt={item.name}
                                style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={{
                                backgroundColor: '#fcbf3d',
                                borderRadius: '8px',
                                padding: '5px 10px',
                                fontWeight: '500',
                                fontSize: '14px'
                            }}>
                                {item.name}
                            </div>
                        </div>
                    ))}
                    <p style={{ margin: '0 auto', textAlign: 'center' }}>
                    <button
                         onClick={() => navigate('/Partner')}
                         style={{
                            marginTop: '40px',
                            padding: '12px 24px',
                            backgroundColor: '#FFA500',
                            color: 'white',                 //TODO: nieumiem to gowno wycentrowac ja pierdole
                            border: 'none',
                            borderRadius: '999px',
                            fontSize: '16px',
                            cursor: 'pointer'
                        }}
                     >
                        Zostań naszym partnerem
                         </button>
                    </p>

                   </div>
                </div>
            </div>
    );
}

export default Home;
