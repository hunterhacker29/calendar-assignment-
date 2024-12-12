import React, { useState, useEffect } from 'react';
import Day from './Day';
import '../styles/calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});

  
  useEffect(() => {
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleAddEvent = (day, event) => {
    const key = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`;
    const newEvents = { ...events, [key]: [...(events[key] || []), event] };
    setEvents(newEvents);
    localStorage.setItem('events', JSON.stringify(newEvents));
  };

  const days = [];
  const totalDays = daysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  for (let i = 1; i <= totalDays; i++) {
    days.push(
      <Day
        key={i}
        day={i}
        events={events[`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${i}`]}
        onAddEvent={(event) => handleAddEvent(i, event)} // Pass the event handler
      />
    );
  }

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <button onClick={handlePreviousMonth}>Previous</button>
        <div className="calendar-month-year">
          <h2>{monthName} {year}</h2>
        </div>
        <button onClick={handleNextMonth}>Next</button>
      </header>
      <div className="calendar-grid">{days}</div>
    </div>
  );
};

export default Calendar;
