import React, { useState } from 'react';
import '../styles/Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {

    };
    
    return (
        <div className="loginContainer">
            <label className="title">Sign in to HinoStudy</label>
            <p className="subtitle">Welcome back! Please enter your details.</p>
            <div className="userName">
                <span class="material-symbols-outlined">person</span>
                <input placeholder="Username" onChange={(event) => {
                    setUsername(event.target.value);
                }}/>
            </div>
            <div className="passWord">
                <span class="material-symbols-outlined">lock</span>
                <input placeholder="Password" onChange={(event) => {
                    setPassword(event.target.value);
                }}/>
            </div>
            <button className="authButton" onClick={login}>Sign In</button>
        </div>
    )
}

export default Login;