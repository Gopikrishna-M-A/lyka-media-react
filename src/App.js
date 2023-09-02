import React, { useEffect, useState } from 'react';
import './App.css';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing.jsx";
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/AboutUs/AboutUs.jsx';
import Loading from './components/Loading/Loading';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Simulate an image loading delay (replace with your actual loading logic)
  useEffect(() => {
    const totalAssets = 10; // Replace with the total number of assets to load
    let loadedAssets = 0;

    const updateProgress = () => {
      loadedAssets++;
      const newProgress = (loadedAssets / totalAssets) * 100;
      setProgress(newProgress);

      if (loadedAssets === totalAssets) {
        setIsLoading(false);
      }
    };

    // Simulate loading each asset
    const assetLoadingInterval = setInterval(() => {
      updateProgress();
      if (loadedAssets === totalAssets) {
        clearInterval(assetLoadingInterval);
      }
    }, 300); // Adjust the delay as needed

    // Clean up when component unmounts
    return () => {
      clearInterval(assetLoadingInterval);
    };
  }, []);

  return (
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#242527',
        // Alias Token
        colorBgContainer: '#ffffff',
      },
    }}
  >
    {isLoading ? (
      <Loading progress={progress} />
    ) : (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    )}
  </ConfigProvider>
  );
};

export default App;
