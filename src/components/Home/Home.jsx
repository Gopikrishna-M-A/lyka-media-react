import React from 'react';
import { Row, Typography } from 'antd';

const { Text } = Typography;

const Home = ({ id }) => {
  return (
    <div className='home' id={id} style={{ minHeight: '100vh', padding: '20px',paddingTop: '0'}}>

        <video autoPlay muted loop id="video" src="/video.mp4"></video>
        <div className='logo-wrapper'>
            <img className='logo-img' src="/images/logo.png" alt="" />
        </div>
        <Row className='home-center-text'>
                <Text className='hero-text-lg'>WELCOME TO LYKA MEDIA</Text>
                <Text className='hero-text-sm'>SOCIAL MEDIA, INFLUENCER MARKETING, EVENTS</Text>
        </Row>
        <Row className='end'>
            EXPLORE SERVICES
        </Row>
    </div>
  );
};

export default Home;