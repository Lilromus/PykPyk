import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import background from './assets/background.jpg';

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

       
        if (login === '' || password === '') {
            setErrorMessage('Proszę wprowadzić login i hasło.');
            setValid(false);
            return;
        }

       
        if (login === 'Admin' && password === 'Owca') {
            setErrorMessage('');
            setValid(true);

          
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } else {
            setErrorMessage('Nieprawidłowy login lub hasło.');
            setValid(false);
        }
    };

    const inputStyle = (fieldName) => {
        if (errorMessage && (fieldName === '' || (login !== 'Admin' || password !== 'Owca'))) {
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
                <h2>Logowanie</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Login"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            style={inputStyle(login)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Hasło"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={inputStyle(password)}
                        />
                    </div>
                    <p style={{ textAlign: 'right', fontSize: '13px', color: 'gray', marginTop: '10px' }}>
                        Nie masz konta? <Link to="/signup" style={{ color: 'gray' }}>Zarejestruj się</Link>
                    </p>
                    <button type="submit" className="form-button">Zaloguj</button>
                </form>
    
                {errorMessage && (
                    <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>{errorMessage}</p>
                )}
            </div>
        </div>
    );
    
}

export default Login;
