import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [name, setFirstName] = useState('');
  const [surname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const formData = {
        name,
        surname,
        address,
        email,
        phone,
      };

      const response = await axios.post('http://10.85.4.255:8080/habitants', formData);

      console.log('Réponse du serveur:', response.data);

      // Afficher le message de succès dans une alerte
      window.alert(response.data.message);

      // Rediriger vers la page "/login" après le succès de la requête
      navigate('/home');
    } catch (error) {
      console.error('Erreur lors de la requête POST:', error);

      // Afficher le message d'erreur dans une alerte
      window.alert(error.response.data.message || 'Erreur inattendue lors de l\'inscription.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Tribelle</h1>
      <div className="login-form">
        <label className='label-login' htmlFor="firstName">Name:</label>
        <input
          className='input-login'
          type="text"
          id="firstName"
          value={name}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label className='label-login' htmlFor="lastName">Surname:</label>
        <input
          className='input-login'
          type="text"
          id="lastName"
          value={surname}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label className='label-login' htmlFor="email">Email:</label>
        <input
          className='input-login'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className='label-login' htmlFor="phoneNumber">Phone:</label>
        <input
          className='input-login'
          type="tel"
          id="phoneNumber"
          value={phone}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label className='label-login' htmlFor="address">Adress:</label>
        <input
          className='input-login'
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <button className='button-login' onClick={handleRegister}>Register</button>
        <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
