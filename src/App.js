import './App.css';
import React from 'react';
import { Weather } from './components';
import { LandingPage, MainPage, HomePage } from './pages';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
     <div className='bgImage'>
    <div className="screen">
    <div className='App'>
      <Weather/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="home" element={<HomePage />} /> */}
        <Route path="/main" element={<MainPage />} />
      </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
