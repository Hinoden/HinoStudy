import React from 'react';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [cookies, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/");
    }

    return (
        <div className="navbarContainer">
            <p className="navTitle">HinoStudy</p>
            <button className="navButton" onClick={logout}>Log Out</button>
        </div>
    )
}

export default Navbar;