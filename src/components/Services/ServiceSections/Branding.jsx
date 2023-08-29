import React from "react";
import { Row, Typography } from "antd";
import { BulbOutlined, StarOutlined, RightSquareOutlined, CompressOutlined, EyeOutlined, GatewayOutlined, InboxOutlined, RadarChartOutlined } from "@ant-design/icons";
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
            <BulbOutlined className="service-icon" />
            <Title level={3} className="service-name">
              BRANDING <br /> CONSULTANCY
            </Title>
          </div>

          <div className="service-box">
            <StarOutlined className="service-icon" />
            <Title level={3} className="service-name">
              CREATIVE <br />
              ADVERTISING
            </Title>
          </div>

          <div className="service-box">
            <RightSquareOutlined className="service-icon" />
            <Title level={3} className="service-name">
              CREATIVE <br /> CONTENT
            </Title>
          </div>
 
          <div className="service-box">
            <CompressOutlined className="service-icon" />
            <Title level={3} className="service-name">
              DIGITAL <br /> DESIGN
            </Title>
          </div>

          <div className="service-box">
            <EyeOutlined className="service-icon" />
            <Title level={3} className="service-name">
              INFORMATION <br /> DESIGN
            </Title>
          </div>

          <div className="service-box">
            <GatewayOutlined className="service-icon" />
            <Title level={3} className="service-name">
              PUBLICATION <br /> & BTL DESIGN
            </Title>
          </div>

          <div className="service-box">
            <InboxOutlined className="service-icon" />
            <Title level={3} className="service-name">
              PACKAGING <br /> DESIGN
            </Title>
          </div>

          <div className="service-box">
            <RadarChartOutlined className="service-icon" />
            <Title level={3} className="service-name">
              BRAND <br /> ACTIVATION
            </Title>
          </div>
        </Row>
      </Row>
    </div>
  );
}
