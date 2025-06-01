import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import logo2 from './assets/logo123.png';
import heroImage from './assets/address-container-animation.webm';
import ytlogo from './assets/youtube.png';
import twitterlogo from './assets/twitterlogo.png';
import facebooklogo from './assets/facebooklogo.png';
import instagramlogo from './assets/instagramlogo.png';
import phoneLogo from './assets/phonelogo.png'
import emailLogo from './assets/email.png'
import googlemapsLogo from './assets/googlemaps.png'
import restaurantImg from './assets/restaurants-opt.svg'
import groceriesImg from './assets/groceries-opt.svg'
import deliveryImg from './assets/delivery-opt.svg'
import mcdonalds from './assets/mcdonalds.jpg'
import biedronka from './assets/biedronka.jpg'
import kfc from './assets/kfc.jpg'
import king from './assets/king.jpg'
import hut from './assets/hut.jpg'
import salad from './assets/salad.jpg'
import pasibus from './assets/passibus.jpg'
import thai from './assets/thai.jpg'
import miastaLogo from './assets/Miasta_logo.svg'

function Home() {
  const navigate = useNavigate();

  const brands = [
    { name: "McDonald's", img: mcdonalds },
    { name: "Biedronka", img: biedronka },
    { name: "KFC", img: kfc },
    { name: "Burger King", img: king },
    { name: "Pizza Hut", img: hut },
    { name: "Salad Story", img: salad },
    { name: "Pasibus", img: pasibus },
    { name: "Thai Wok", img: thai },
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
        backgroundColor: '#efb541',
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
            <a href="#onas" className="nav-link">O nas</a>
            <a href="#kontakt" className="nav-link">Kontakt</a>
            <a href="#dostawa" className="nav-link">Dostawa</a>
            <a href="#partnerzy" className="nav-link">Partnerzy</a>


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
      <header>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '50px',
        paddingRight: '50px',
        gap: '40px',
        minHeight: '70vh'
      }}>
        <video
          src={heroImage}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '400px',
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
      </header>
      <section id="partnerzy">
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
          fontSize: '46px',
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
                src={item.img}
                alt={item.name}
                className="custom-mask"
                style={{
                  width: '130px',
                  height: '130px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                backgroundColor: '#fcbf3d',
                borderRadius: '8px',
                marginBottom: 30,
                height: 25
              }}>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button id='bombaclat' onClick={() => navigate('/Partner')}>
            Zostań naszym partnerem
          </button>
        </div>
      </div>
      </section>

      {/* Sekcja - Dostarczamy wszystko */}

      <section id="dostawa">
      <div style={{
        backgroundColor: '#fff',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '60px'
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
              img: restaurantImg,
              title: 'Popularne restauracje w Twoim mieście', //TODO: tu tez jakis zdjecia plsss
              text: <>
                Dzięki szerokiej ofercie restauracji możesz zamówić ulubione jedzenie lub <span style={highlight}>sprawdzić nowe miejsca w okolicy.</span>
              </>
            },
            {
              img: deliveryImg,
              title: 'Szybka dostawa',
              text: <>
                Jak błyskawica! Zamów lub wyślij dowolny artykuł w swoim mieście, <span style={highlight}>a my go szybko dostarczymy.</span>
              </>
            },
            {
              img: groceriesImg,
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

        <button id='bombaclat' onClick={() => navigate('/Kurier')}>
          Zostań naszym kurierem
        </button>
      </div>
      </section>


      {/* Miasta */}
      <div style={{
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <img
        src={miastaLogo}
        alt="Miasta logo"
        style={{ marginRight: 10}}
      />
        <h2 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
      Miasta w których dostarczamy
    </h2>


        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '30px'
        }}>

          {["Warszawa", "Gdańsk", "Kraków", "Wrocław", "Łódź", "Poznań", "Katowice", "Bydgoszcz", "Szczecin", "Lublin"].map((city, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '12px 24px',
              borderRadius: '999px',
              fontWeight: '500'
            }}>{city}</div>
          ))}
        </div>

        <button id='bombaclatv2'>
          Zobacz wszystkie miasta
        </button>

        {/* Kategorie*/}

        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          marginBottom: '30px'
        }}>
          Popularne kategorie
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '30px'
        }}>
          {["Kebab", "Pizza", "Sushi", "Kwiaty", "Burgery", "Ryby", "Prezenty"].map((category, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '12px 24px',
              borderRadius: '999px',
              fontWeight: '500'
            }}>{category}</div>
          ))}
        </div>

        <button id='bombaclatv2'>
          Zobacz wszystkie kategorie
        </button>
      </div>

      {/* O nas */}
      <section id='onas'>
      <div style={{
        backgroundColor: '#fff',
        padding: '80px 20px',
        width: '100vw',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '30px'
        }}>
          O nas
        </h2>
        <p style={{
          maxWidth: '800px',
          margin: '0 auto',
          fontSize: '18px',
          lineHeight: '1.6',
          color: '#333'
        }}>
          <span>PykPyk to innowacyjna platforma dostaw, która łączy ludzi z lokalnymi restauracjami, sklepami i usługami. Naszą misją jest uproszczenie codziennych zakupów i dostaw dzięki szybkiemu, bezpiecznemu i wygodnemu systemowi zamówień. Niezależnie od tego, czy potrzebujesz jedzenia, produktów spożywczych, leków czy prezentu – my to dostarczymy. Działamy z pasją i lokalnym zaangażowaniem, bo wierzymy, że czas to najcenniejsza waluta.</span>
        </p>
      </div>
      </section>

      <section id="kontakt">

     <footer style={{
        backgroundColor: '#1A1A1A',
        padding: '40px 20px',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        fontSize: '14px'
      }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
     <img src={logo2} alt="PykPyk logo" style={{ height: '55px', objectFit: 'contain', marginBottom: '10px'}} />
     <p style={{
      fontSize: '16px',
      fontWeight: '500',
      marginBottom: '20px'
    }}>
      Ułatwiamy dostęp do wszystkiego w Twoim mieście
    </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px'}}>
      <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
      <img src={ytlogo} alt="YouTube" style={{ height: '20px', objectFit: 'contain' }} /> </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <img src={twitterlogo} alt="Twitter" style={{ height: '20px', objectFit: 'contain' }} /> </a>
      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
      <img src={facebooklogo} alt="Facebook" style={{ height: '20px', objectFit: 'contain' }} /> </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
      <img src={instagramlogo} alt="Instagram" style={{ height: '20px', objectFit: 'contain' }} /> </a>
      </div>
    </div>


    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: '#ccc' }}>
  <h3 style={{ fontWeight: 'bold', marginBottom: '10px', color: '#fff', fontSize: '16px' }}>Kontakt</h3>

  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <img
      src={phoneLogo}
      alt="Phone"
      style={{ height: '20px', objectFit: 'contain', marginRight: '10px' }}/>
    <span style={{ fontSize: '14px' }}>+48 123 456 789</span>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <img
      src={emailLogo}
      alt="Email"
      style={{ height: '20px', objectFit: 'contain', marginRight: '10px' }}/>
    <span style={{ fontSize: '14px' }}>pykpyk_contact@pyk.com</span>
  </div>

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <a href="https://google.com/maps/" target='_blank' rel="noopener noreferrer">
    <img
      src={googlemapsLogo}
      alt="GoogleMaps"
      style={{ height: '20px', objectFit: 'contain', marginRight: '10px' }}/>
    </a>
    <span style={{ fontSize: '14px' }}>ul. Mikołaja Reja 25, 80-870 Gdańsk</span>
  </div>
</div>


  <div>
    <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Top kategorie</h3>
    <p>Kebab</p>
    <p>Pizza</p>
    <p>Burgers</p>
  </div>
</footer>
</section>

    </div>

    
  );
}

export default Home;
