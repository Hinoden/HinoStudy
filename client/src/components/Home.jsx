import React from 'react';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';

function Home() {
    const [cookies, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/");
    }
    return (
        <div>
            <div>Home</div>
            {cookies.access_token ? <button onClick={logout}>Log Out</button> : <div>Please log in</div>}
        </div>
    )
}

export default Home;