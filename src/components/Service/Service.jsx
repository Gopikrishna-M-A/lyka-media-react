import React from 'react';
import { Row, Typography } from 'antd';
import { AppleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
const { Text, Title } = Typography;

const Service = ({ id }) => {
  const navigate = useNavigate();
  const handleServiceClick = async(serviceId) => {
    // Navigate to the Services page and scroll to the corresponding section
    navigate('/services');
    await new Promise((resolve) => setTimeout(resolve, 100));
    scrollToSection(serviceId);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='service section' id={id} >
        <Row className='service-title-wrapper'>
            <Text className='service-title'>SERVICES</Text>
        </Row>

        <Row className='service-items'>
          
            <div className="service-box" onClick={() => handleServiceClick("service-stratergy")}>
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>SRATERGY & CONSULTANCY</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-branding")}>
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>BRANDING & DESIGN</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-social")}>
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>SOCIAL MEDIA</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-digital")}>
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>DIGITAL & INNOVATION</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-video")}>
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>VIDEO, AUDIO & ANIMATION</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-pr")}>
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>PR</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-media")}>
              <AppleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>MEDIA PLANNING & BUYING</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-events")}>
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