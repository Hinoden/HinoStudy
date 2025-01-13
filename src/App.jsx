import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Tasks from './components/Tasks.jsx';
import Timer from './components/Timer.jsx';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [workHours, setWorkHours] = useState(0);
  const [workMinutes, setWorkMinutes] = useState(0);
  const [workSeconds, setWorkSeconds] = useState(0);
  return (
    <div className= {`AppContainer ${isPopupOpen ? 'dimmed' : ''}`}>
      <Navbar setIsPopupOpen={setIsPopupOpen} setWorkHours={setWorkHours} setWorkMinutes={setWorkMinutes} setWorkSeconds={setWorkSeconds}/>
      <div className="HorizontalContainer">
        <div className="TasksContainer">
          <Tasks />
        </div>
        <div className="TimerContainer">
          <Timer workHours={workHours} workMinutes={workMinutes} workSeconds={workSeconds}/>
        </div>
      </div>
    </div>
  );
}

export default App