import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import '../styles/Navbar.css';

function Navbar({setIsPopupOpen}) {
    return (
        <div className="NavContainer">
            <p id="logo">HinoStudy</p>
            <div className="ButContainer">
                <button id="brainrot">Brainrot</button>
                <Popup trigger = 
                    {<button id="settings">Settings</button>}
                    modal nested
                    onOpen={() => setIsPopupOpen(true)}
                    onClose={() => setIsPopupOpen(false)}>
                    {
                        close => (
                            <div className='PopupContainer'>
                                <div className='PopupTitle'>
                                    Settings
                                </div>
                                <div>
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
