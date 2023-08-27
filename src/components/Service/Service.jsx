import React from 'react';
import { Row, Typography } from 'antd';
import { AppleOutlined } from '@ant-design/icons'
const { Text, Title } = Typography;
const Service = ({ id, content }) => {

  return (
    <div className='service section' id={id} >
        <Row className='service-title-wrapper'>
            <Text className='service-title'>SERVICES</Text>
        </Row>

        <Row className='service-items'>
          
            <div className="service-box">
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>SRATERGY & CONSULTANCY</Title>
            </div>

            <div className="service-box">
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>BRANDING & DESIGN</Title>
            </div>

            <div className="service-box">
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>SOCIAL MEDIA</Title>
            </div>

            <div className="service-box">
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>DIGITAL & INNOVATION</Title>
            </div>

            <div className="service-box">
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>VIDEO, AUDIO & ANIMATION</Title>
            </div>

            <div className="service-box">
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>PR</Title>
            </div>

            <div className="service-box">
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>MEDIA PLANNING & BUYING</Title>
            </div>

            <div className="service-box">
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>EVENTS</Title>
            </div>
            


            
            
        </Row>
        <Row className='end'>
            EXPLORE WORKS
        </Row>
    </div>
  );
};

export default Service;