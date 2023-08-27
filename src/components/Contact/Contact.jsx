import React from 'react';
import { Row, Typography } from 'antd';
import { MailOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, PhoneOutlined } from '@ant-design/icons'
const { Text } = Typography;

const Contact = ({ id, content }) => {
  return (
    <div id={id} style={{ height: '100vh', padding: '20px', backgroundColor: '#f9ee6a'}}>


        <Row className='contact-title-wrapper'>
            <Text className='contact-title'>CONTACT</Text>
        </Row>
        <div className="contact-wrapper">
         <Text className='contact-head'>TELL US ABOUT YOUR PROJECT</Text>

          <Row className='social-link-wrapper'>
            <MailOutlined className='social-icon'/>
            <Text className='social-text'>example@gmail.com</Text>
          </Row>

          <Text className='social-title'>SOCIAL</Text>
          <Row className='social-link-wrapper'>
          <FacebookOutlined className='social-icon'/>
          <Text className='social-text'>example@gmail.com</Text>
          </Row>
          
          <Row className='social-link-wrapper'>
          <TwitterOutlined className='social-icon'/>
          <Text className='social-text'>example@gmail.com</Text>
          </Row>
          
          <Row className='social-link-wrapper'>
          <InstagramOutlined className='social-icon'/>
          <Text className='social-text'>example@gmail.com</Text>
          </Row>
          
          <Row className='social-link-wrapper phone'>
          <PhoneOutlined className='social-icon'/>
          <Text className='social-text'>+99 9999999999</Text>
          </Row>
        </div>
        

        
    </div>
  );
};

export default Contact;
