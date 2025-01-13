import React from 'react';
import Popup from 'reactjs-popup';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="NavContainer">
            <p id="logo">HinoStudy</p>
            <div className="ButContainer">
                <button id="brainrot">Brainrot</button>
                <Popup trigger = 
                    {<button id="settings">Settings</button>}
                    modal nested>
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

// Filename: App.js

// import React from 'react';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

// export default function PopupGfg() {
//     return (
//         <div>
//             <h4>Popup - GeeksforGeeks</h4>
//             <Popup trigger=
//                 {<button> Click to open modal </button>} 
//                 modal nested>
//                 {
//                     close => (
//                         <div className='modal'>
//                             <div className='content'>
//                                 Welcome to GFG!!!
//                             </div>
//                             <div>
//                                 <button onClick=
//                                     {() => close()}>
//                                         Close modal
//                                 </button>
//                             </div>
//                         </div>
//                     )
//                 }
//             </Popup>
//         </div>
//     )
// };
