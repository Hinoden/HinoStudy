import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Tasks from './components/Tasks.jsx';
import Timer from './components/Timer.jsx';
import Brainrot from './components/Brainrot.jsx';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isBrainrot, setIsBrainrot] = useState(false);
  const [workHours, setWorkHours] = useState(0);
  const [workMinutes, setWorkMinutes] = useState(0);
  const [workSeconds, setWorkSeconds] = useState(0);
  const [breakHours, setBreakHours] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(0);
  const [breakSeconds, setBreakSeconds] = useState(0);
  return (
    <div className= {`AppContainer ${isPopupOpen ? 'dimmed' : ''}`}>
      <Navbar setIsPopupOpen={setIsPopupOpen} setIsBrainrot={setIsBrainrot} setWorkHours={setWorkHours} setWorkMinutes={setWorkMinutes} setWorkSeconds={setWorkSeconds} setBreakHours={setBreakHours} setBreakMinutes={setBreakMinutes} setBreakSeconds={setBreakSeconds}/>
      <div className="HorizontalContainer">
        <div className="TasksContainer">
          <Tasks />
        </div>
        <div className="TimerContainer">
          <Timer workHours={workHours} workMinutes={workMinutes} workSeconds={workSeconds} breakHours={breakHours} breakMinutes={breakMinutes} breakSeconds={breakSeconds}/>
        </div>
        {isBrainrot && (
          <div className="BrainrotContainer">
          <Brainrot/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App