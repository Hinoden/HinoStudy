import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "../styles/AuthPage.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={`auth-container ${isLogin ? "login-mode" : "signup-mode"}`}>
      {/* Left Panel (forms) */}
      <div className="form-panel">
        {isLogin ? <Login /> : <SignUp />}
      </div>

      {/* Right Panel (info + toggle button) */}
      <div className="info-panel">
        <div className="info-content">
          {isLogin ? (
            <>
              <h2 className="authTitle">New here?</h2>
              <p className="authText">Create an account to lock in and start studying!</p>
              <button onClick={() => setIsLogin(false)}>Sign Up</button>
            </>
          ) : (
            <>
              <h2 className="authTitle">Welcome back!</h2>
              <p className="authText">Click below to log in. It's time to be productive!</p>
              <button onClick={() => setIsLogin(true)}>Login</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
