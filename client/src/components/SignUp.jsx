import React, {useState} from "react";
import axios from "axios";
import '../styles/SignUp.css';

function SignUp() {
    const [user, setUser] = useState(null);

    const signUp = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", {
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                password: user.password,
            });
            alert("Registration Completed! Now loin.");
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="signUpContainer">
            <label className="title">Sign Up</label>
            <p className="subtitle">Welcome! Please enter your details.</p>
            <div className="firstName">
                <span className="material-symbols-outlined">person</span>
                <input placeholder="First Name" onChange={(event) => {
                    setUser({...user, firstname: event.target.value});
                }}/>
            </div>
            <div className="lastName">
                <span className="material-symbols-outlined">person</span>
                <input placeholder="Last Name" onChange={(event) => {
                    setUser({...user, lastname: event.target.value});
                }}/>
            </div>
            <div className="userName">
                <span className="material-symbols-outlined">person</span>
                <input placeholder="Username" onChange={(event) => {
                    setUser({...user, username: event.target.value});
                }}/>
            </div>
            <div className="passWord">
                <span className="material-symbols-outlined">lock</span>
                <input type="password" placeholder="Password" onChange={(event) => {
                    setUser({...user, password: event.target.value});
                }}/>
            </div>

            <button className="authButton" onClick={signUp}>Sign Up</button>
        </div>
    )
}

export default SignUp;