import React, { useState } from 'react';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import '../styles/Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [ , setCookies] = useCookies(["access_token"]);
    
    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login", {
                username,
                password
            });

            if (response.data.token){
                setCookies("access_token", response.data.token);
                window.localStorage.setItem("userID", response.data.userID);
                navigate("/home");
            } else {
                alert(response.data.message);
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred during login. Please try again.");
        }
    };
    
    return (
        <div className="loginContainer">
            <label className="title">Sign in to HinoStudy</label>
            <p className="subtitle">Welcome back! Please enter your details.</p>
            <div className="userName">
                <span className="material-symbols-outlined">person</span>
                <input placeholder="Username" value={username} onChange={(event) => {
                    setUsername(event.target.value);
                }}/>
            </div>
            <div className="passWord">
                <span className="material-symbols-outlined">lock</span>
                <input type="password" placeholder="Password" value={password} onChange={(event) => {
                    setPassword(event.target.value);
                }}/>
            </div>
            <button className="authButton" onClick={login}>Sign In</button>
        </div>
    )
}

export default Login;