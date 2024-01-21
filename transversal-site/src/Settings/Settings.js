import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Settings.css'; // Importation du fichier CSS

function Settings() {
  // Ajoutez ici la logique pour gérer les états des champs de formulaire si nécessaire

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
        <h2 className='title-settings' >Settings</h2>
      <div className="content-settings">
      <br></br>
      <br></br><br></br><br></br><br></br><br></br>
        <form className="form-container">
          <label className="label-input" htmlFor="firstName">First Name:</label>
          <input className="text-input" type="text" id="firstName" />

          <label className="label-input" htmlFor="lastName">Last Name:</label>
          <input className="text-input" type="text" id="lastName" />

          <label className="label-input" htmlFor="email">Email:</label>
          <input className="text-input" type="email" id="email" />

          <label className="label-input" htmlFor="password">Password:</label>
          <input className="text-input" type="password" id="password" />

          <label className="label-input" htmlFor="address">Address:</label>
          <input className="text-input" type="text" id="address" />

          {/* Ajoutez d'autres champs de formulaire avec les classes appropriées */}

          <button className="primary-button">Modify</button>
        </form>
        <button className="delete-button">Delete this account</button>
      </div>
    </div>
  );
}

export default Settings;
