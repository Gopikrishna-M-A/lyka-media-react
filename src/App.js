import React, { useEffect, useState } from 'react';
import './App.css';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing.jsx";
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/AboutUs/AboutUs.jsx';
import Loading from './components/Loading/Loading';

// '/images/Chess.png', 
// '/images/social.jpg',
// '/images/mike.jpg',
// '/images/tv.jpg',
// '/images/event.jpg',
// '/video.mp4'

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Function to preload an asset (image or video)
    const preloadAsset = (url) => {
      return new Promise((resolve, reject) => {
        const asset = new Image();
        asset.src = url;
        asset.onload = resolve;
        asset.onerror = reject;
      });
    };

    // List of image and video URLs in the public folder
    const assetUrls = [
      '/images/Chess.png', 
      '/images/social.jpg',
      '/images/mike.jpg',
      '/images/tv.jpg',
      '/images/event.jpg',
      '/video.mp4'
    ];

    const totalAssets = assetUrls.length;
    let loadedAssets = 0;

    const updateProgress = () => {
      loadedAssets++;
      const newProgress = Math.round((loadedAssets / totalAssets) * 100)
      setProgress(newProgress);

      if (loadedAssets === totalAssets) {
        setIsLoading(false);
      }
    };

    // Preload each asset
    assetUrls.forEach((url) => {
      preloadAsset(url)
        .then(() => {
          updateProgress();
        })
        .catch((error) => {
          console.error('Error preloading asset:', error);
          updateProgress(); // Update progress even if an asset fails to load
        });
    });

    // Clean up when component unmounts
    return () => {
      // You can cancel any ongoing asset preload here if needed
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
