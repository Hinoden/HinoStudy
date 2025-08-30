import React, {useState} from "react";
import Axios from "axios";
import Cookies from "universal-cookie";
import '../styles/SignUp.css';

function SignUp() {
    const cookies = new Cookies();
    const [user, setUser] = useState(null);

    const signUp = () => {
        Axios.post("http://localhost:3001/signup", user).then(res => {
            const {token, userId, firstName, lastName, username, hashedPassword} = res.data;
            cookies.set("token", token);
            cookies.set("userId", userId);
            cookies.set("firstName", firstName);
            cookies.set("lastName", lastName);
            cookies.set("username", username);
            cookies.set("hashedPassword", hashedPassword);
        })
    }
    return (
        <div className="signUpContainer">
            <label className="title">Sign Up</label>
            <p className="subtitle">Welcome! Please enter your details.</p>
            <div className="firstName">
                <span class="material-symbols-outlined">person</span>
                <input placeholder="First Name" onChange={(event) => {
                    setUser({...user, firstName: event.target.value});
                }}/>
            </div>
            <div className="lastName">
                <span class="material-symbols-outlined">person</span>
                <input placeholder="Last Name" onChange={(event) => {
                    setUser({...user, lastName: event.target.value});
                }}/>
            </div>
            <div className="userName">
                <span class="material-symbols-outlined">person</span>
                <input placeholder="Username" onChange={(event) => {
                    setUser({...user, username: event.target.value});
                }}/>
            </div>
            <div className="passWord">
                <span class="material-symbols-outlined">lock</span>
                <input placeholder="Password" onChange={(event) => {
                    setUser({...user, password: event.target.value});
                }}/>
            </div>

            <button className="authButton" onClick={signUp}>Sign Up</button>
        </div>
    )
}

export default SignUp;