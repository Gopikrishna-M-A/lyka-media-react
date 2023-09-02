import React from 'react';
import './App.css';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing.jsx";
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/AboutUs/AboutUs.jsx';

const App = () => {
  return (
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: "#242527",
        // Alias Token
        colorBgContainer: "#ffffff",
      },
    }}
  >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
