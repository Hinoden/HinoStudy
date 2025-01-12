import React, {useState, useEffect} from 'react';
import {BsStopwatch} from 'react-icons/bs';
import {BsFillPlayFill, BsPauseFill, BsStopFill} from "react-icons/bs"
import '../styles/Timer.css';

function Timer() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(null);
    const [showEndScreen, setShowEndScreen] = useState({
        show: false,
        message: "Time's up! Let's take a break!"
    })

    useEffect(() => {
        let interval;
        if (isRunning){
            interval = setInterval(() => {
                if (seconds > 0){
                    setSeconds((seconds) => seconds - 1);
                } else if (minutes > 0){
                    setMinutes((minutes) => minutes - 1);
                    setSeconds(59);
                } else if (hours > 0){
                    setHours((hours) => hours - 1);
                    setMinutes(59);
                    setSeconds(59);
                }
            }, 1000);
        }

        if (hours === 0 && minutes === 0 && seconds === 1){
            setShowEndScreen({...showEndScreen, show: true});
        }
        if (hours === 0 && minutes === 0 && seconds === 0){
            resetTimer();
        }
        return () => clearInterval(interval);
    }, [seconds, minutes, hours, isRunning, showEndScreen.show]);

    function startTimer(){
        if (hours !==0 || minutes !==0 || seconds !==0){
            setIsRunning(true);
            setShowEndScreen({...showEndScreen, show: false});
        }
        else{
            window.alert("You forgot to add time, silly<3")
        }
    }

    function pauseTimer(){
        setIsRunning(false);
    }

    function stopTimer(){
        resetTimer();
        setShowEndScreen({...showEndScreen, show: false});
    }

    function resetTimer(){
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    const changeSeconds = (e) => {
        setSeconds(e.target.value)
    }

    const changeMinutes = (e) => {
        setMinutes(e.target.value)
    }

    const changeHours = (e) => {
        setHours(e.target.value)
    }

    return (
        <div className="TimerContainer">
            <p id="TimerTitle">Pomodoro Timer</p>
            {showEndScreen.show && <p id="message">{showEndScreen.message}</p>}
                <div className="TimerWrapper">
                    <BsStopwatch className="stop-watch"/>
                    <div className="column">
                        <label>Hours</label>
                        <input value={hours} onChange={changeHours}/>
                    </div>
                    <div className="column">
                        <label>Minutes</label>
                        <input value={minutes} onChange={changeMinutes}/>
                    </div>{" "}
                    <div className="column">
                        <label>Seconds</label>
                        <input value={seconds} onChange={changeSeconds}/>
                    </div>
                </div>

                <br />
            
            <div className="buttonContainer">
                {!isRunning && (
                    <button className="accept-button" onClick={startTimer}>
                        <BsFillPlayFill />
                    </button>
                )}
                {isRunning && (
                    <button className="warning-button" onClick={pauseTimer}>
                        <BsPauseFill />
                    </button>
                )}
                <button className="danger-button" onClick={stopTimer}>
                    <BsStopFill />
                </button>
            </div>
        </div>
    );
}

export default Timer;