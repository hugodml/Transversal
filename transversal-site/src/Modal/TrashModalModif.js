import React from 'react';
import './TrashModal.css';

function TrashModal({ closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Manage Trash</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" />
        <div className="modal-buttons">
          <button className="modify-button">Modify</button>
          <button className="delete-button">Delete</button>
        </div>
        <button className="close-modal-button" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default TrashModal;
