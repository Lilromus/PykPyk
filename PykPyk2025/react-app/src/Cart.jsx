import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Cart.css';

import logo2 from './assets/logo123.png';
import foodLogo from './assets/Food_logo.svg';
import creditCard from './assets/Credit_Card.svg';
import Cash from './assets/Cash.svg';
import GooglePay from './assets/Google_Pay.png';
import ApplePay from './assets/Apple_Pay.png';


const availableCities = [
  { value: 'warszawa', label: 'Warszawa' },
  { value: 'krakow', label: 'Kraków'   },
  { value: 'gdansk', label: 'Gdańsk'   },
  { value: 'poznan', label: 'Poznań'   },
];

export default function Cart() {
  const navigate = useNavigate();
  const location = useLocation();


  const cartItems = (location.state && location.state.cartItems) || [];
  const totalAmount = (location.state && location.state.totalAmount) || 0;
  const restaurantName = (location.state && location.state.restaurantName) || '';

 
  const [selectedCity, setSelectedCity]       = useState('');
  const [dropdownOpen,  setDropdownOpen]      = useState(false);
  const [address, setAddress]                 = useState('');
  const [floor, setFloor]                     = useState(''); 
  const [apartment, setApartment]             = useState('');
  const [selectedPayment, setSelectedPayment] = useState('credit'); 

  const goBack = () => {
    navigate(-1);
  };

  const toggleCityDropdown = () => {
    setDropdownOpen(open => !open);
  };


  const handleCitySelect = (value) => {
    setSelectedCity(value);
    setDropdownOpen(false);
  };

  const isFormValid =
    selectedCity.trim() !== '' &&
    address.trim()      !== '' &&
    floor.trim()        !== '' &&
    apartment.trim()    !== '';

  return (
    <>
      <header className="navbar">
        <img
          src={logo2}
          alt="PykPyk Logo"
          className="logo"
          onClick={() => navigate('/home')}
        />
      </header>

      <div className="cart-page">
        <div className="cart-left">
          <div className="back-row" onClick={goBack}>
            <span className="back-arrow">&#8592;</span>
            <span className="back-text">Wróć do restauracji</span>
          </div>

          {restaurantName && (
            <h1 className="restaurant-name">{restaurantName}</h1>
          )}

          <p className="products-count">
              &nbsp;
          </p>

          <ul className="order-summary-list">
            {cartItems.map((item) => (
              <li key={item.name} className="summary-item">
                <div className="summary-left">
                  <span className="summary-qty">{item.qty}×</span>
                  <span className="summary-name">{item.name}</span>
                </div>
                <div className="summary-right">
                  <span className="summary-price">{item.price}</span>
                </div>
                {item.description && (
                  <p className="summary-description">{item.description}</p>
                )}
              </li>
            ))}
          </ul>

          <p className="products-count">
              &nbsp;
          </p>

          <h2 className="section-title">Delivery address</h2>

          <div className="custom-dropdown">
            <div
              className={`custom-dropdown-header ${dropdownOpen ? 'open' : ''}`} onClick={toggleCityDropdown}>
              <span>
                {selectedCity
                  ? availableCities.find(c => c.value === selectedCity)?.label
                  : 'Wybierz miasto'}
              </span>
              <span className={`dropdown-arrow ${dropdownOpen ? 'rotated' : ''}`}>
                &#9662;
              </span>
            </div>

            {dropdownOpen && (
              <ul className="custom-dropdown-list">
                {availableCities.map(city => (
                  <li
                    key={city.value}
                    className="custom-dropdown-item"
                    onClick={() => handleCitySelect(city.value)}>
                    {city.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <input type="text" 
            className="address-input" 
            placeholder="Wpisz ulicę i numer..." 
            value={address} 
            onChange={(e) => setAddress(e.target.value)}/>

          <div className="small-address-inputs">
            <input
              type="text"
              className="address-small"
              placeholder="Piętro"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}/>
            <input
              type="text"
              className="address-small"
              placeholder="Nr mieszkania"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}/>
          </div>

          <h2 className="section-title">Payment method</h2>
          <div className="payment-options">
            <div
              className={
                selectedPayment === 'credit'
                  ? 'payment-card selected'
                  : 'payment-card'
              }
              onClick={() => setSelectedPayment('credit')}>
              <img src={creditCard} alt="Credit Card" className="payment-icon"/>
              <span>Credit Card</span>
            </div>

            <div
              className={
                selectedPayment === 'cash'
                  ? 'payment-card selected'
                  : 'payment-card'
              }
              onClick={() => setSelectedPayment('cash')}>
              <img src={Cash} alt="Cash" className="payment-icon"/>
              <span>Cash</span>
            </div>

            <div
              className={
                selectedPayment === 'googlepay'
                  ? 'payment-card selected'
                  : 'payment-card'
              }
              onClick={() => setSelectedPayment('googlepay')}>
              <img src={GooglePay} alt="Google Pay" className="payment-icon googlepay-icon"/>
              <span>Google Pay</span>
            </div>

            <div
              className={
                selectedPayment === 'applepay'
                  ? 'payment-card selected'
                  : 'payment-card'
              }
              onClick={() => setSelectedPayment('applepay')}>
              <img src={ApplePay} alt="Apple Pay" className="payment-icon applepay-icon"/>
              <span>Apple Pay</span>
            </div>
          </div>
        </div>

        <div className="cart-right">
          <div className="summary-card">
            <div className="summary-header">
              <h3>Summary</h3>
              <img src={foodLogo} alt="Food logo" className="summary-logo" />
            </div>

            <hr/>

            <div className="summary-line">
              <span>Products</span>
              <span>{totalAmount.toFixed(2)} zł</span>
            </div>

            <div className="summary-line">
              <span>Delivery</span>
              <span>2,99 zł</span>
            </div>

            <div className="summary-total">
              <span>TOTAL</span>
              <span>{(totalAmount + 2.99).toFixed(2)} zł</span>
            </div>

            <button
              className={`summary-button ${!isFormValid ? 'disabled' : ''}`}
              disabled={!isFormValid}
              onClick={() => {
                console.log(
                  'Wysyłamy zamówienie:',
                  cartItems,
                  '→ Łącznie:',
                  (totalAmount + 2.99).toFixed(2),
                  'Miasto:',
                  selectedCity,
                  'Ulica i numer:',
                  address,
                  'Piętro:',
                  floor,
                  'Nr mieszkania:',
                  apartment,
                  'Płatność:',
                  selectedPayment
                );
              }}>
              Order and pay
            </button>

            <div className="summary-scallops" />
          </div>
        </div>
      </div>
    </>
  );
}
