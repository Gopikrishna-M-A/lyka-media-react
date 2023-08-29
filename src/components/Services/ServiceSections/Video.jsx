import React from "react";
import { Row, Typography } from "antd";
import { RiseOutlined, VideoCameraOutlined, PlayCircleOutlined, AudioOutlined, CameraOutlined, EditOutlined, FundViewOutlined, CustomerServiceOutlined } from "@ant-design/icons";
const { Title } = Typography;

export default function Video({ id }) {
  return (
    <div
      id={id}
      className="Service-section"
      style={{ backgroundColor: "#F3AA60" }}
    >
      <Row className="service-section-title-wrapper">
        <Title className="service-section-title">
          VIDEO, AUDIO & ANIMATION
        </Title>
      </Row>

      <Row className="service-section-content-wrapper">
        <Row className="service-items">
          <div className="service-box">
            <VideoCameraOutlined className="service-icon" />
            <Title level={3} className="service-name">
              VIDEO <br /> PRODUCTION
            </Title>
          </div>

          <div className="service-box">
            <PlayCircleOutlined className="service-icon" />
            <Title level={3} className="service-name">
              2D & 3D <br />
              ANIMATION
            </Title>
          </div>

          <div className="service-box">
            <AudioOutlined className="service-icon" />
            <Title level={3} className="service-name">
              SOUND <br /> DESIGN
            </Title>
          </div>

          <div className="service-box">
            <CameraOutlined className="service-icon" />
            <Title level={3} className="service-name">
              PHOTOGRAPHY
            </Title>
          </div>

          <div className="service-box">
            <EditOutlined className="service-icon" />
            <Title level={3} className="service-name">
              CONTENT <br /> PRODUCTION
            </Title>
          </div>

          <div className="service-box">
            <FundViewOutlined className="service-icon" />
            <Title level={3} className="service-name">
              3D <br /> VISUALIZATION
            </Title>
          </div>

          <div className="service-box">
            <CustomerServiceOutlined className="service-icon" />
            <Title level={3} className="service-name">
              SONIC <br /> BRANDING
            </Title>
          </div>

          <div className="service-box">
            <RiseOutlined className="service-icon" />
            <Title level={3} className="service-name">
              EVENT <br /> COVERAGE
            </Title>
          </div>
        </Row>
      </Row>
    </div>
  );
}
