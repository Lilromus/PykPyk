import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';



function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (login === '' || password === '') {
            alert('Proszę wprowadzić login i hasło.');
            return;
        }

        alert('Logowanie powiodło się!');
        navigate('/home');
    };

    return (
        <div className="form-container">
            <h2>Logowanie</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Hasło"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <p style={{ textAlign: 'right', fontSize: '13px', color: 'gray', marginTop: '10px' }}>
                Nie masz konta? <Link to="/signup" style={{ color: 'gray' }}>Zarejestruj się</Link>
            </p>
                <button type="submit" className="form-button">Zaloguj</button>
            </form>
        </div>
    );
}

export default Login;
