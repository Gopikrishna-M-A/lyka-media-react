import React from "react";
import { Row, Avatar, Typography, Button, Form, Input } from "antd";

import {
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Text } = Typography;


const onFinish = (values) => {
  console.log(values);
};

const Contact = ({ id }) => {
  return (
    <div
      id={id}
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f4d703",
      }}
    >
      <Row className="contact-title-wrapper">
        <Text className="contact-title">CONTACT</Text>
      </Row>
      <div className="contact-wrapper">
        <div className="left">
          <Text className="contact-head">Tell us about your project</Text>
          <Row className="social-link-wrapper">
            <Link className="icon-link" to="mailto:wanderinggfoodie@gmail.com" target="_blank"><MailOutlined className="social-icon" /></Link>
            <Text className="social-text">contact@lykamedia.com</Text>
          </Row>

          <Text className="social-title">SOCIAL</Text>
          <div className="social-icon-wrapper">
          <Link className="icon-link" to="https://www.tiktok.com/@wanderingfoodie?lang=en" target="_blank"><Avatar className="icons" src={require('./logos/tiktok.png')} /></Link>
          <Link className="icon-link" to="https://www.facebook.com/people/wanderingg_foodie/100063618180148/" target="_blank"><Avatar className="icons" src={require('./logos/facebook.png')} /></Link>
          <Link className="icon-link" to="https://www.instagram.com/wanderingg_foodie/?hl=en" target="_blank"><Avatar className="icons" src={require('./logos/instagram.png')} /></Link>
          <Link className="icon-link" to="https://www.youtube.com/channel/UC0Iws137nObLZ0_DtUixruw" target="_blank"><Avatar className="icons" src={require('./logos/youtube.png')} /></Link>
          <Link className="icon-link" to="https://www.threads.net/@wanderingg_foodie" target="_blank"><Avatar className="icons" src={require('./logos/threads.png')} /></Link>
          
          </div>

          <Row className="social-link-wrapper phone">
            <PhoneOutlined className="social-icon" />
            <Text className="social-text">+971 543661913</Text>
          </Row>
        </div>
        <div className="right">
          <Form
            name="contact-form"
            onFinish={onFinish}
            style={{
              maxWidth: "500px",
              padding: "30px",
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
              <Input placeholder="Name" />
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
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea placeholder="Message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
