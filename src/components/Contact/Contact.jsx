import React from "react";
import { Row, Typography, Button, Form, Input } from "antd";

import {
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
const { Text } = Typography;


const onFinish = (values) => {
  console.log(values);
};

const Contact = ({ id }) => {
  return (
    <div
      id={id}
      style={{ minHeight: "100vh", padding: "20px", backgroundColor: "#f9ee6a" }}
    >
      <Row className="contact-title-wrapper">
        <Text className="contact-title">CONTACT</Text>
      </Row>
      <div className="contact-wrapper">
        <Text className="contact-head">Tell us about your project</Text>

        <Row className="social-link-wrapper">
          <MailOutlined className="social-icon" />
          <Text className="social-text">example@gmail.com</Text>
        </Row>

        <Text className="social-title">SOCIAL</Text>
        <Row className="social-link-wrapper">
          <FacebookOutlined className="social-icon" />
          <Text className="social-text">example@gmail.com</Text>
        </Row>

        <Row className="social-link-wrapper">
          <TwitterOutlined className="social-icon" />
          <Text className="social-text">example@gmail.com</Text>
        </Row>

        <Row className="social-link-wrapper">
          <InstagramOutlined className="social-icon" />
          <Text className="social-text">example@gmail.com</Text>
        </Row>

        <Row className="social-link-wrapper phone">
          <PhoneOutlined className="social-icon" />
          <Text className="social-text">+99 9999999999</Text>
        </Row>
      </div>

      <Form
        name="contact-form"
        onFinish={onFinish}
        style={{
          maxWidth:"500px",
          padding:'30px'
        }}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input 
          placeholder="Name"/>
        </Form.Item>


        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input 
          placeholder="Email"/>
        </Form.Item>
        
        
        <Form.Item 
        name="message" 
        rules={[
          {
            required: true
          },
        ]}>
          <Input.TextArea 
          placeholder="Message"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
    </div>
  );
};

export default Contact;
