import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        if (email === '' || login === '' || password === '' || confirmPassword === '') {
            alert('Proszę wypełnić wszystkie pola.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Hasła nie są takie same.');
            return;
        }

        alert('Rejestracja powiodła się!');
        navigate('/home');
    };

    return (
        <div className="form-container">
            <h2>Rejestracja</h2>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
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
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Potwierdź hasło"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <p style={{ textAlign: 'right', fontSize: '13px', color: 'gray', marginTop: '10px' }}>
                Czy posiadasz konto? <Link to="/" style={{ color: 'gray' }}>Zaloguj się</Link>
            </p>
                <button type="submit" className="form-button">Zarejestruj</button>
            </form>
            
        </div>
    );
}

export default Signup;
