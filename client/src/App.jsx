import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthPage from './components/AuthPage.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          // <div className="authContainer">
          //   <Login/>
          //   <SignUp/>
          // </div>
          <AuthPage />
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;