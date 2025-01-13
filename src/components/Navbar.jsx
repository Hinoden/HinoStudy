import React, {useState} from 'react';
import { IoMdSettings } from "react-icons/io";
import Popup from 'reactjs-popup';
import '../styles/Navbar.css';

function Navbar({setIsPopupOpen, setWorkHours, setWorkMinutes, setWorkSeconds}) {
    const [workHoursPopup, setWorkHoursPopup] = useState(0);
    const [workMinutesPopup, setWorkMinutesPopup] = useState(0);
    const [workSecondsPopup, setWorkSecondsPopup] = useState(0);
    return (
        <div className="NavContainer">
            <p id="logo">HinoStudy</p>
            <div className="ButContainer">
                <button id="brainrot">Brainrot</button>
                <Popup trigger = 
                    {<button id="settings"><IoMdSettings /> Settings</button>}
                    modal nested
                    onOpen={() => setIsPopupOpen(true)}
                    onClose={() => {
                        setIsPopupOpen(false);
                        setWorkHours(workHoursPopup);
                        setWorkMinutes(workMinutesPopup);
                        setWorkSeconds(workSecondsPopup);
                    }}>
                    {
                        close => (
                            <div className='PopupContainer'>
                                <div className='PopupTitle'>
                                    Settings
                                </div>
                                <div className='PopupTimer'>
                                    <p id="header">Adjust Timer</p>
                                    <p id="description">If you'd like the Pomodoro timer to be automatic, input your desired work and break times here.</p>
                                    <p id="workText">Work Time</p>
                                    <div className='work'>
                                        <div className="column">
                                            <label>Hours</label>
                                            <input id="settingTimer" value={workHoursPopup} onChange={(e) => setWorkHoursPopup(parseInt(e.target.value) || 0)}/>
                                        </div>
                                        <div className="column">
                                            <label>Minutes</label>
                                            <input id="settingTimer" value={workMinutesPopup} onChange={(e) => setWorkMinutesPopup(parseInt(e.target.value) || 0)} />
                                        </div>
                                        <div className="column">
                                            <label>Seconds</label>
                                            <input id="settingTimer" value={workSecondsPopup} onChange={(e) => setWorkSecondsPopup(parseInt(e.target.value) || 0)} />
                                        </div>
                                    </div>
                                    <p id='breakText'>Break Time</p>
                                    <div className='break'>
                                        <div className="column">
                                            <label>Hours</label>
                                            <input id="settingTimer" value={0} />
                                        </div>
                                        <div className="column">
                                            <label>Minutes</label>
                                            <input id="settingTimer" value={0} />
                                        </div>
                                        <div className="column">
                                            <label>Seconds</label>
                                            <input id="settingTimer" value={0} />
                                        </div>
                                    </div>
                                </div>
                                <div className="closeBtn">
                                    <button onClick = {() => close()}>Close</button>
                                </div>
                            </div>
                        )
                    }
                </Popup>
            </div>
        </div>
    );
}

export default Navbar;
