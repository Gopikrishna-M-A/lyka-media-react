import React from "react";
import { Row, Typography } from "antd";
import { AppleOutlined } from "@ant-design/icons";
const { Title } = Typography;

export default function Digital({id}) {
  return (
    <div id={id} className="Service-section" style={{ backgroundColor: "#EF6262" }}>
      <Row className="service-section-title-wrapper">
        <Title className="service-section-title">DIGITAL & INNOVATION</Title>
      </Row>

      <Row className="service-section-content-wrapper">
        <Row className="service-items">
          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              WEB  <br /> DEVELOPMENT
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              MOBILE <br />
              APPLICATIONS
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              DIGITAL <br /> MARKETTING
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              AR, VR, <br /> MR & XR
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              ARTIFICIAL <br /> INTELLIGENCE
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              ENTERPRICE <br /> BLOCKCHAIN
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              INTERNET <br /> OF THINGS
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              MACHINE <br /> LEARNING
            </Title>
          </div>
        </Row>
      </Row>
    </div>
  );
}
