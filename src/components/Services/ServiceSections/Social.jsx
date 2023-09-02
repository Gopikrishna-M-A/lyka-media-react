import React from "react";
import { Row, Typography } from "antd";
const { Text, Title } = Typography;

export default function Social({ id }) {
  return (
    <div id={id} className="Service-section">
      <img className="bg-img" src="/images/social.jpg" alt="" />
      <Row className="service-section-title-wrapper">
        <Title className="service-section-title">SOCIAL MEDIA</Title>
      </Row>

      <Row className="service-section-content-wrapper para">
        <Text className="service-section-content">
          It's not about just speaking the language of social media; it's about
          mastering the art of conversation. From crafting brilliant social
          strategies to curating captivating content with our talented in-house
          production teams, we're all about cultivating a fulfilling journey for
          both your brand and its audience.
          <br />
          <br />
          Why? Because sparking unwavering loyalty begins with the magic of
          exceptional content.
          <br />
          <br />
          🚀 EXPERT SOCIAL MEDIA STRATEGY<br />
          📝 CONTENT MASTERPLANNING<br />
          🎨 CREATIVITY UNLEASHED<br />
          👥 SOCIAL COMMUNITY CARE<br />
          📊 DATA-DRIVEN INSIGHTS
        </Text>
      </Row>
    </div>
  );
}
