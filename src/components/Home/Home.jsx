import React from 'react';
import { Row, Typography } from 'antd';

const { Text } = Typography;

const Home = ({ id, content }) => {
  return (
    <div className='home' id={id} style={{ minHeight: '100vh', padding: '20px',paddingTop: '0', backgroundColor: '#6a2870'}}>
        <Row className='logo-wrapper'>
            <Text className='logo'>LYKA MEDIA</Text>
        </Row>
        <Row className='home-center-text'>
                <Text className='hero-text-lg'>WELCOME TO LYKA MEDIA</Text>
                <Text className='hero-text-sm'>MEDIA, SOCIAL, EVENTS, DESIGN & BUILD</Text>
        </Row>
        <Row className='end'>
            EXPLORE SERVICES
        </Row>
    </div>
  );
};

export default Home;