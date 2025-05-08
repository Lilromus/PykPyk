import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from './assets/background.jpg';

function Partner() {
  const [imie, setImie] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [firma, setFirma] = useState('');
  const [typDzialalnosci, setTypDzialalnosci] = useState('');
  const [telefon, setTelefon] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imie || !nazwisko || !firma || !typDzialalnosci || !telefon || !email) {
      setErrorMessage('Proszę wypełnić wszystkie pola.');
      return;
    }

    if (!/^\d{9}$/.test(telefon)) {
      setErrorMessage('Numer telefonu musi zawierać 9 cyfr.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Wprowadź poprawny adres e-mail.');
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
      }}>
      <div className="form-container" style={{ maxHeight: '90vh', overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '30px', borderRadius: '8px' }}>
        <h2>Dołącz jako partner</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Imię"
              value={imie}
              onChange={(e) => setImie(e.target.value)}
              style={inputStyle(imie)}/>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nazwisko"
              value={nazwisko}
              onChange={(e) => setNazwisko(e.target.value)}
              style={inputStyle(nazwisko)}/>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nazwa firmy"
              value={firma}
              onChange={(e) => setFirma(e.target.value)}
              style={inputStyle(firma)}
            />
          </div>
          <div className="form-group">
            <select
              value={typDzialalnosci}
              onChange={(e) => setTypDzialalnosci(e.target.value)}
              style={{ padding: '8px', fontSize: '14px', ...inputStyle(typDzialalnosci) }}>
              <option value="">Wybierz typ działalności</option>
              <option value="restauracja">Restauracja</option>
              <option value="sklep">Sklep spożywczy</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Telefon służbowy"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
              style={inputStyle(telefon)}/>
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="E-mail służbowy"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle(email)}/>
          </div>
          <button type="submit" className="form-button">Dołącz</button>
        </form>

        {errorMessage && (
          <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default Partner;
