import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="NavContainer">
            <p id="logo">HinoStudy</p>
            <div className="ButContainer">
                <button id="brainrot">Brainrot</button>
                <button id="settings">Settings</button>
            </div>
        </div>
    );
}

export default Navbar;