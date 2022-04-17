import './App.css';
import React from 'react';
import Clock from './components/clock/Clock';
import Weather from './components/weather/Weather';
import LandingPage from './pages/landingPage/LandingPage';
import { Route, Routes } from "react-router-dom";
import MainPage from './pages/mainPage/MainPage';
import HomePage from './pages/homePage/HomePage';
import Quote from './components/quoteComponent/Quote';

function App() {
  return (
    <div className="App">
     <div style={{ 
  backgroundImage: `url("https://picsum.photos/1600/1000?random")`,
  backgroundRepeat: 'no-repeat',
  width:'100%',
  height:'100vh', 
}}>
      <Weather/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
