import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ajoutez ici la logique de connexion, par exemple, une requête API ou une vérification locale.
    console.log('Email:', email);
    console.log('Mot de passe:', password);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Tribelle</h1>
      <div className="login-form">
        <label className='labal-login' htmlFor="email">Email:</label>
        <input
          className='input-login'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          className='input-login'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className='button-login' onClick={handleLogin}>Login</button>
        <p className="register-link">Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;
