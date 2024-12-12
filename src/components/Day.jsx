import React, { useState } from 'react';
import EventModal from './Event';
import '../styles/day.css';

const Day = ({ day, events, onAddEvent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation(); 
    setIsModalOpen(true);
  };

  return (
    <div className={`day ${isModalOpen ? 'active' : ''}`} onClick={handleClick}>
      <span>{day}</span>
      {events && events.length > 0 && (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event.name} ({event.startTime} - {event.endTime})
            </li>
          ))}
        </ul>
      )}
      {isModalOpen && (
        <EventModal
          onClose={() => setIsModalOpen(false)}
          onAddEvent={(event) => {
            onAddEvent(event);
            setIsModalOpen(false);  
          }}
        />
      )}
    </div>
  );
};

export default Day;
