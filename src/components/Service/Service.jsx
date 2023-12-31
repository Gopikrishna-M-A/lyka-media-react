import React from 'react';
import { Row, Typography } from 'antd';
import { HeatMapOutlined, AimOutlined, ShareAltOutlined, RocketOutlined, PlayCircleOutlined, BuildOutlined, BorderOutlined, DotChartOutlined } from '@ant-design/icons'
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
              <HeatMapOutlined className='service-icon'/>
              <Title level={3} className='service-name'>STRATEGY & CONSULTANCY</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-branding")}>
              <AimOutlined  className='service-icon'/>
              <Title level={3} className='service-name'>BRANDING & DESIGN</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-social")}>
              <ShareAltOutlined  className='service-icon' />
              <Title level={3} className='service-name'>SOCIAL MEDIA MARKETING</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-digital")}>
              <RocketOutlined  className='service-icon' />
              <Title level={3} className='service-name'>DIGITAL & INNOVATION</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-video")}>
              <PlayCircleOutlined  className='service-icon' />
              <Title level={3} className='service-name'>VIDEO, AUDIO & ANIMATION</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-pr")}>
              <BuildOutlined  className='service-icon' />
              <Title level={3} className='service-name'>PR</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-media")}>
              <BorderOutlined  className='service-icon' />
              <Title level={3} className='service-name'>MEDIA PLANNING & BUYING</Title>
            </div>

            <div className="service-box" onClick={() => handleServiceClick("service-events")}>
              <DotChartOutlined  className='service-icon' />
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