import React, { useState, useEffect } from 'react';
import { BsStopwatch } from 'react-icons/bs';
import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";
import { IoIosSkipForward } from "react-icons/io";
import '../styles/Timer.css';

function Timer() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [currentScreen, setCurrentScreen] = useState("");

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds((prev) => prev - 1);
                } else if (minutes > 0) {
                    setMinutes((prev) => prev - 1);
                    setSeconds(59);
                } else if (hours > 0) {
                    setHours((prev) => prev - 1);
                    setMinutes(59);
                    setSeconds(59);
                } else {
                    handleTimerEnd();
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [hours, minutes, seconds, isRunning]);

    function handleTimerEnd() {
        setIsRunning(false);

        if (isBreak) {
            setCurrentScreen("Time's up! Let's get back to working!");
        } else {
            setCurrentScreen("Time's up! Let's take a break!");
        }

        setIsBreak(!isBreak);
    }

    function startTimer() {
        if (hours !== 0 || minutes !== 0 || seconds !== 0) {
            setIsRunning(true);
            setCurrentScreen("");
        } else {
            window.alert("You forgot to add time, silly<3");
        }
    }

    function pauseTimer() {
        setIsRunning(false);
    }

    function stopTimer() {
        resetTimer();
        setCurrentScreen("");
    }

    function resetTimer() {
        setIsRunning(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    }

    function skipTimer() {
        setIsBreak(!isBreak);
        if (isBreak) {
            setCurrentScreen("Time's up! Let's get back to working!");
        } else {
            setCurrentScreen("Time's up! Let's take a break!");
        }
        resetTimer();
    }

    const changeSeconds = (e) => {
        setSeconds(parseInt(e.target.value) || 0);
    };

    const changeMinutes = (e) => {
        setMinutes(parseInt(e.target.value) || 0);
    };

    const changeHours = (e) => {
        setHours(parseInt(e.target.value) || 0);
    };

    return (
        <div className="TimerContainer">
            <p id="TimerTitle">Pomodoro Timer</p>
            {currentScreen && <p id="message">{currentScreen}</p>}
            <div className="TimerWrapper">
                <BsStopwatch className="stop-watch" />
                <div className="column">
                    <label>Hours</label>
                    <input value={hours} onChange={changeHours} />
                </div>
                <div className="column">
                    <label>Minutes</label>
                    <input value={minutes} onChange={changeMinutes} />
                </div>
                <div className="column">
                    <label>Seconds</label>
                    <input value={seconds} onChange={changeSeconds} />
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
                <button className="skip-button" onClick={skipTimer}>
                    <IoIosSkipForward />
                </button>
            </div>
        </div>
    );
}

export default Timer;