import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Tasks from './components/Tasks.jsx';
import Timer from './components/Timer.jsx';
import './App.css';

function App() {

  return (
    <div>
      <Navbar />
      <div className="HorizontalContainer">
        <div className="TasksContainer">
          <Tasks />
        </div>
        <div className="TimerContainer">
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default App