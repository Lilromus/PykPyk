import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import background from './assets/background.jpg';

function Kurier() {
    const [Imie, setImie] = useState('');
    const [Nazwisko, setNazwisko] = useState('');
    const [Miasto, setMiasto] = useState('');
    const [Wiek, setWiek] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();

    const handleImie = (e) => {
        e.preventDefault();

       
        if (Imie === '' || Nazwisko === '') {
            setErrorMessage('Proszę wprowadzić Imie i Nazwisko.');
            setValid(false);
            return;
        }

       
        if (Imie === 'Admin' && Nazwisko === 'Owca') {
            setErrorMessage('');
            setValid(true);

          
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } else {
            setErrorMessage('Nieprawidłowy Imie lub hasło.');
            setValid(false);
        }
    };

    const inputStyle = (fieldName) => {
        if (errorMessage && (fieldName === '' || (Imie !== 'Admin' || Nazwisko !== 'Owca'))) {
            return { border: '2px solid red' };
        }
        if (valid) {
            return { border: '2px solid green' };
        }
        return {};
    };


    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat', 
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
            }}
        >
            <div className="form-container" style={{ maxHeight: '90vh', overflowY: 'hidden' }}>
                <h2>Wyślij formularz</h2>
                <form onSubmit={handleImie}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Imie"
                            value={Imie}
                            style={inputStyle(Imie)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nazwisko"
                            value={Nazwisko}
                            style={inputStyle(Imie)}
                        />
                    </div>
                    <div className="form-group">
                        <select name="" id="">
                            <option value="cos">cos</option>
                            <option value="cos">coss</option>
                            </select>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Wiek"
                            value={Wiek}
                            style={inputStyle(Imie)}
                        />
                    </div>
                    <button type="submit" className="form-button">Wyślij</button>
                </form>
    
                {errorMessage && (
                    <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>{errorMessage}</p>
                )}
            </div>
        </div>
    );
    
}
export default Kurier;