import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthPage from './components/AuthPage.jsx';
import Home from './components/Home.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AuthPage />
        }/>
        <Route path="/home" element={
          <Home />
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;