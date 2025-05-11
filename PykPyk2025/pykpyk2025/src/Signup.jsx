import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import background from './assets/background.jpg';

function Signup() {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        const isEmpty =
            email.trim() === '' ||
            login.trim() === '' ||
            password.trim() === '' ||
            confirmPassword.trim() === '';

        if (isEmpty) {
            setErrorMessage('Wypełnij wszystkie pola.');
            setValid(false);
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Hasła nie są takie same.');
            setValid(false);
            return;
        }

        setErrorMessage('');
        setValid(true);

        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    const inputStyle = (fieldValue, customCondition = true) => {
        if (!fieldValue.trim() || !customCondition) {
            return errorMessage ? { border: '2px solid red' } : {};
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
            <div className="form-container" style={{ maxHeight: '90vh', overflow: 'hidden' }}>
                <h2>Rejestracja</h2>
                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={inputStyle(email)}
                        />
                    </div>
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
                            style={inputStyle(password, password === confirmPassword)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Potwierdź hasło"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            style={inputStyle(confirmPassword, password === confirmPassword)}
                        />
                    </div>
                    <p style={{ textAlign: 'right', fontSize: '13px', color: 'gray', marginTop: '10px' }}>
                        Czy posiadasz konto? <Link to="/login" style={{ color: 'gray' }}>Zaloguj się</Link>
                    </p>
                    <button type="submit" className="form-button">Zarejestruj</button>
                </form>

                {errorMessage && (
                    <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>{errorMessage}</p>
                )}
            </div>
        </div>
    );
}

export default Signup;
