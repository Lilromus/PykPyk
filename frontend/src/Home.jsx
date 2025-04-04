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
    { name: "Burger King", img: 'burgerking.jpg' },   //TODO: zdjecie za okraglowne w assetsach
    { name: "Pizza Hut", img: 'pizzahut.jpg' },
    { name: "Salad Story", img: 'saladstory.jpg' },
    { name: "Pasibus", img: 'pasibus.jpg' },
    { name: "Thai Wok", img: 'thaiwok.jpg' }
  ];

  const highlight = {
    backgroundColor: '#fcbf3d',
    padding: '2px 4px',
    borderRadius: '4px'
  };

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
        paddingTop: '900px',
        paddingLeft: '50px',
        paddingRight: '50px',
        gap: '40px',
        minHeight: '100vh'
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
        minHeight: '200px',
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
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => navigate('/Partner')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFA500',
              color: 'white',
              border: 'none',
              borderRadius: '999px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            <bold>Zostań naszym partnerem</bold>
          </button>
        </div>
      </div>

      {/* Sekcja: Dlaczego warto wybrać PykPyk */}
      <div
        style={{
        backgroundColor: '#fff',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        padding: '60px 20px',
        textAlign: 'center',
        }}
        >

        <div style={{
        backgroundColor: 'white',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        padding: '60px 20px',
        textAlign: 'center',
      }}>
  <h2 style={{
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '60px',
  }}>
    Dostarczamy wszystko
  </h2>

  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '60px',
    flexWrap: 'wrap',
    marginBottom: '40px'
  }}>
    {[
      {
        img: '/assets/delivery1.png', //TODO: zdjecie zaokraglone dla assetsow pls
        title: 'Popularne restauracje w Twoim mieście',
        text: <>
          Dzięki szerokiej ofercie restauracji możesz zamówić ulubione jedzenie lub <span style={highlight}>sprawdzić nowe miejsca w okolicy.</span>
        </>
      },
      {
        img: '/assets/delivery2.png',
        title: 'Szybka dostawa',
        text: <>
          Jak błyskawica! Zamów lub wyślij dowolny artykuł w swoim mieście, <span style={highlight}>a my go szybko dostarczymy.</span>
        </>
      },
      {
        img: '/assets/delivery3.png',
        title: 'Dostawa artykułów spożywczych i nie tylko',
        text: <>
          U nas znajdziesz wszystko! <span style={highlight}>Od supermarketów po sklepy, apteki i kwiaciarnie</span> – jeśli punkt działa w Twoim mieście, złóż zamówienie, a my zajmiemy się dostawą.
        </>
      }
    ].map((item, index) => (
      <div key={index} style={{ maxWidth: '300px' }}>
        <img src={item.img} alt={item.title} style={{ width: '100px', marginBottom: '20px' }} />
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{item.title}</h3>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>{item.text}</p>
      </div>
    ))}
  </div>

  <button style={{
    padding: '12px 24px',
    backgroundColor: '#00aa88',
    color: 'white',
    border: 'none',
    borderRadius: '999px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }}>
    Sprawdź okoliczne punkty
  </button>
</div>

        </div>
      </div>
  );
}

export default Home;
