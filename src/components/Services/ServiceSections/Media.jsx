import React from 'react'
import { Row, Typography } from "antd";
const { Text, Title } = Typography;

export default function Media({ id }) {
  return (
    <div id={id} className="Service-section">
      <img className="bg-img" src="/images/tv.jpg" alt="" />
      <Row className="service-section-title-wrapper">
        <Title className="service-section-title">MEDIA PLANNING & BUYING</Title>
      </Row>

      <Row className="service-section-content-wrapper para">
        <Text className="service-section-content">
          Advertising isn't just about spending; it's about making every penny
          count. Our seasoned teams are the architects of cost-efficient
          brilliance, constantly seeking ingenious methods to boost your
          campaigns' potency while trimming the fat.
          <br />
          <br />
          📊 SOCIAL MEDIA PLANS<br />
          🏞️ OUTDOOR<br />
          🎙️ RADIO<br />
          📰 PRESS<br />
          💻 DIGITAL BUYING<br />
          💡 SOCIAL MEDIA BUYING
          <br />
          <br />
          When it comes to advertising, we're not just spending money; we're investing in your success.
        </Text>
      </Row>
    </div>
  );
}
