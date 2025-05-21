import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from './assets/background.jpg';

function Kurier() {
  const [Imie, setImie] = useState('');
  const [Nazwisko, setNazwisko] = useState('');
  const [Miasto, setMiasto] = useState('');
  const [Wiek, setWiek] = useState('');
  const [Pojazd, setPojazd] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Imie || !Nazwisko || !Wiek || !Miasto || !Pojazd) {
      setErrorMessage('Proszę wypełnić wszystkie pola.');
      return;
    }

    if (parseInt(Wiek) < 18) {
      setErrorMessage('Musisz mieć co najmniej 18 lat.');
      return;
    }

    setErrorMessage('');
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const inputStyle = (value) => {
    if (errorMessage && value === '') {
      return { border: '2px solid red' };
    }
    return {};
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <div className="form-container" style={{ maxHeight: '90vh', overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '30px', borderRadius: '8px' }}>
        <h2>Utwórz profil</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Imię"
              value={Imie}
              onChange={(e) => setImie(e.target.value)}
              style={inputStyle(Imie)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nazwisko"
              value={Nazwisko}
              onChange={(e) => setNazwisko(e.target.value)}
              style={inputStyle(Nazwisko)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Wiek"
              value={Wiek}
              onChange={(e) => setWiek(e.target.value)}
              style={inputStyle(Wiek)}
            />
          </div>
          <div className="form-group">
            <select
              value={Miasto}
              onChange={(e) => setMiasto(e.target.value)}
              style={{ padding: '8px', fontSize: '14px', ...inputStyle(Miasto) }}>
              <option value="">Wybierz miasto</option>
              <option value="warszawa">Warszawa</option>
              <option value="gdansk">Gdańsk</option>
              <option value="krakow">Kraków</option>
              <option value="wroclaw">Wrocław</option>
              <option value="lodz">Łódź</option>
              <option value="poznan">Poznań</option>
              <option value="katowice">Katowice</option>
              <option value="bydgoszcz">Bydgoszcz</option>
              <option value="szczecin">Szczecin</option>
              <option value="lublin">Lublin</option>
            </select>
          </div>
          <div className="form-group">
            <select
              value={Pojazd}
              onChange={(e) => setPojazd(e.target.value)}
              style={{ padding: '8px', fontSize: '14px', ...inputStyle(Pojazd) }}>
              <option value="">Wybierz pojazd</option>
              <option value="rower">Rower</option>
              <option value="rower_elektryczny">Rower elektryczny</option>
              <option value="samochod">Samochód</option>
              <option value="motocykl">Motocykl</option>
            </select>
          </div>
          <button type="submit" className="form-button">Stwórz</button>
        </form>

        {errorMessage && (
          <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default Kurier;
