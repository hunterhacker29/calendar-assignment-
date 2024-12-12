import React, { useState } from 'react';
import '../styles/event.css';

const Event = ({ onClose, onAddEvent }) => {
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (name && startTime && endTime) {
      onAddEvent({ name, startTime, endTime, description });

      window.location.reload();

      onClose(); 
    }
  };

  const handleClose = () => {
    
    window.location.reload();
    onClose();  
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="event-modal" onClick={handleModalClick}>
      <div className="modal-content">
        <h3>Add Event</h3>
        <input
          type="text"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="time"
          placeholder="Start Time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="time"
          placeholder="End Time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Event</button>

        {/* Close Button */}
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Event;
