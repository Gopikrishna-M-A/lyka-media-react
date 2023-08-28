import React from "react";
import { Row, Typography } from "antd";
import { AppleOutlined } from "@ant-design/icons";
const { Title } = Typography;

export default function Branding({id}) {
  return (
    <div id={id} className="Service-section" style={{ backgroundColor: "#1D5B79" }}>
      <Row className="service-section-title-wrapper">
        <Title className="service-section-title">BRANDING & DESIGN</Title>
      </Row>

      <Row className="service-section-content-wrapper">
        <Row className="service-items">
          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              BRANDING <br /> CONSULTANCY
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              CREATIVE <br />
              ADVERTISING
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              CREATIVE <br /> CONTENT
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              DIGITAL <br /> DESIGN
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              INFORMATION <br /> DESIGN
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              PUBLICATION <br /> & BTL DESIGN
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              PACKAGING <br /> DESIGN
            </Title>
          </div>

          <div className="service-box">
            <AppleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              BRAND <br /> ACTIVATION
            </Title>
          </div>
        </Row>
      </Row>
    </div>
  );
}
