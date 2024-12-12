import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Dynamic Event Calendar</h1>
      <Calendar />
    </div>
  );
}

export default App;