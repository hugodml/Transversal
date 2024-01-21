import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TrashModalModif from '../Modal/TrashModalModif.js';
// import TrashModalCreate from '../Modal/TrashModalCreate.js';
import trash from "../icon/trash.png";
import './Home.css';

function Home() {
  const [modalModifOpen, setModalModifOpen] = useState(false);
  // const [modalCreateOpen, setModalCreateOpen] = useState(false);

  const openModalModif = () => {
    setModalModifOpen(true);
  };

  const closeModalModif = () => {
    setModalModifOpen(false);
  };

  // const openModalCreate = () => {
  //   setModalCreateOpen(true);
  // };

  // const closeModalCreate = () => {
  //   setModalCreateOpen(false);
  // };

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
      <div className="main-content">
        <header className="home-header">
          <h1>Tribelle</h1>
        </header>
        <div className="content">
          <div className="info-box">
            <img src={trash} alt="Trash Icon" className="icon" />
            <div className="info">
              <p>Name: Trash 1</p>
              <p>Adress: 1 Carrer de Rius i Taulet, Sant Joan Despí, Cataluña</p>
              <p>Description: First trash</p>
              <button className='button-home' onClick={openModalModif}>Manage</button>
            </div>
          </div>
          <div className="info-box">
            <img src={trash} alt="Trash Icon" className="icon" />
            <div className="info">
              <p>Name: Nom2</p>
              <p>Adress: 72 Carrer Major, Sant Joan Despí, Cataluña</p>
              <p>Description: Second trash</p>
              <button className='button-home' onClick={openModalModif}>Manage</button>
            </div>
          </div>
        </div>
        {/* Modal */}
        {modalModifOpen && <TrashModalModif closeModal={closeModalModif} />}
        {/* {modalCreateOpen && <TrashModalCreate closeModal={closeModalCreate} />} */}
      </div>
    </div>
  );
}

export default Home;
