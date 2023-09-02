import React from "react";
import { Row, Typography, Button, Form, Input } from "antd";

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
            <MailOutlined className="social-icon" />
            <Text className="social-text">lykamediagroup@gmail.com</Text>
          </Row>

          <Text className="social-title">SOCIAL</Text>
          <div className="social-icon-wrapper">
            <Link to={"/services"} className="social-link-wrapper">
              <FacebookOutlined className="social-icon" />
            </Link>

            <Row className="social-link-wrapper">
              <TwitterOutlined className="social-icon" />
            </Row>

            <Row className="social-link-wrapper">
              <InstagramOutlined className="social-icon" />
            </Row>
          </div>

          <Row className="social-link-wrapper phone">
            <PhoneOutlined className="social-icon" />
            <Text className="social-text">+97 1543661913</Text>
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
