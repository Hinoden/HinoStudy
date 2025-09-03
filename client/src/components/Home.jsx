import React from 'react';
import Navbar from './Navbar.jsx';
import '../styles/Home.css';

function Home() {
    const [seconds, setSeconds] = React.useState(0);
    const [tempSecs, setTempSecs] = React.useState(0);
    const [minutes, setMinutes] = React.useState(25);
    const [tempMins, setTempMins] = React.useState(25);
    const [isActive, setIsActive] = React.useState(false);
    const [showPopup, setShowPopup] = React.useState(false);

    React.useEffect(() => {
        if (!isActive) return; // do nothing if not active

        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    if (minutes > 0) {
                        setMinutes(prevMinutes => prevMinutes - 1);
                        return 59;
                    } else {
                        setIsActive(false); // stop timer at 0:00
                        return 0;
                    }
                } else {
                    return prevSeconds - 1;
                }
            });
    }, 1000); // 1000ms = 1 second

    return () => clearInterval(interval); // cleanup on unmount or toggle
}, [isActive, minutes]);

    return (
        <div>
            <Navbar />
            <div className={showPopup ? "home-container blurred" : "home-container"}>
                <div className="pomodoro-container">
                    <div className="pomo-nav">
                        <h1 className="homeTitle">Pomodoro</h1>
                        <div className="pomo-buttons">
                            <button className="pomo-button"><span class="material-symbols-outlined">skip_next</span></button>
                            <button className="pomo-button" onClick={() => setShowPopup(true)}><span class="material-symbols-outlined">settings</span></button>
                        </div>
                    </div>
                    <div className="pomoNumbers">
                        <p className="pomoNumber">{String(minutes).padStart(2, "0")}</p>
                        <p className="pomoNumber">:</p>
                        <p className="pomoNumber">{String(seconds).padStart(2, "0")}</p>
                    </div>
                    <button className="startButton" onClick={() => setIsActive(!isActive)}>{isActive ? "Stop" : "Start"}</button>
                </div>
                <div className="todo-container">
                    <h1 className="homeTitle">To-Do List</h1>
                </div>
            </div>

            {/* popup */}
            {showPopup && (
                <div className="popup-container">
                    <div className="popup-title">
                        <h1>Settings</h1>
                        <div className="pomodoro">
                            <div className="pomo-input">
                                <p className="popup-subtitle">Pomodoro:</p>
                                <input type="number" min="1" max="60" value={tempMins} onChange={(e) => {
                                    let val = Number(e.target.value);
                                    if (val > 60) val = 60;
                                    if (val < 1) val = 1;
                                    setTempMins(Number(val))
                                }}/>
                                <span>minutes</span>
                                <input type="number" min="0" max="59" value={tempSecs} onChange={(e) => {
                                    let val = Number(e.target.value);
                                    if (val > 59) val = 59;
                                    if (val < 0) val = 0;
                                    setTempSecs(Number(val))
                                }}/>
                                <span>seconds</span>
                            </div>
                            <div className="short-input">
                                <p className="popup-subtitle">Short Break:</p>
                                <input type="number" min="1" max="60" defaultValue={25} />
                                <span>minutes</span>
                                <input type="number" min="0" max="59" defaultValue={0} />
                                <span>seconds</span>
                            </div>
                            <div className="long-input">
                                <p className="popup-subtitle">Long Break:</p>
                                <input type="number" min="1" max="60" defaultValue={25} />
                                <span>minutes</span>
                                <input type="number" min="0" max="59" defaultValue={0} />
                                <span>seconds</span>
                            </div>
                        </div>
                        <button className="closeButton" onClick={() => {
                            setMinutes(tempMins);
                            setSeconds(tempSecs);
                            setShowPopup(false);
                        }}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home;