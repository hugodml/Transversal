import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Order.css';

function Order() {
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);

  const handleQuantityChange = (conteneur, value) => {
    switch (conteneur) {
      case 1:
        setQuantity1(value);
        break;
      case 2:
        setQuantity2(value);
        break;
      case 3:
        setQuantity3(value);
        break;
      default:
        break;
    }
  };

  const calculateTotal = () => {
    const priceConteneur1 = 75;
    const priceConteneur2 = 80;
    const priceConteneur3 = 100;

    return quantity1 * priceConteneur1 + quantity2 * priceConteneur2 + quantity3 * priceConteneur3;
  };

  const handlePayment = () => {
    window.alert(`Payment of ${calculateTotal()}€ successful!`);
  };

  return (
    <div className="home-container">
      <div className="sidebar">
        <Link className='sidebar1' to="/home">Homepage</Link>
        <Link className='sidebar2' to="/order">Order</Link>
        <Link className='sidebar3' to="/settings">Settings</Link>
        <div style={{ marginTop: 'auto' }}>
          <Link className='sidebar1' to="/login">Disconnect</Link>
        </div>
      </div>
      <div className="main-content order-content">
        <header className="order-header">
          <h1>Order Trash</h1>
        </header>
        <div className="order-form">
          <div className="order-line">
            <label>Trash bin 1 (75€):</label>
            <select
              value={quantity1}
              onChange={(e) => handleQuantityChange(1, parseInt(e.target.value, 10))}
            >
              {[...Array(11).keys()].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="order-line">
            <label>Trash bin 2 (80€):</label>
            <select
              value={quantity2}
              onChange={(e) => handleQuantityChange(2, parseInt(e.target.value, 10))}
            >
              {[...Array(11).keys()].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="order-line">
            <label>Trash bin 3 (100€):</label>
            <select
              value={quantity3}
              onChange={(e) => handleQuantityChange(3, parseInt(e.target.value, 10))}
            >
              {[...Array(11).keys()].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="total-section">
            <p>Total à payer: {calculateTotal()}€</p>
          </div>
          <button className="pay-button" onClick={handlePayment}>Pay</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
