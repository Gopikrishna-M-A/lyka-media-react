import React from "react";
import { Row, Typography } from "antd";
const { Text, Title } = Typography;

export default function AboutUs() {
  return (
    <div
      className="about-us"
      style={{ backgroundColor: "#fff100", height: "100vh", color: "#fff" }}
    >
      <Row className="about-section-title-wrapper">
        <Title className="about-section-title">ABOUT US</Title>
      </Row>

      <Row className="about-section-content-wrapper">
        <Text className="about-section-content">
          WE ARE LYKA MEDIA. <br /> WE ARE AN INDEPENDENT CREATIVE MARKETING AND LIVE
          EXPERIENCE AGENCY. <br />WE HELP BRANDS BE RELEVANT. <br />OUR LAYERLESS
          INTEGRATION™ ENABLES INSIGHT-LED SOLUTIONS TO OUR CLIENTS PROBLEMS.
        </Text>
      </Row>
    </div>
  );
}
