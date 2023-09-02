import React from 'react'
import { Row, Typography } from "antd";
const { Text, Title } = Typography;

export default function Pr({id}) {
  return (
    <div id={id} className="Service-section">
      <img className="bg-img" src="/images/mike.jpg" alt="" />
      <Row className="service-section-title-wrapper">
        <Title className="service-section-title">PR</Title>
      </Row>

      <Row className="service-section-content-wrapper para">
        <Text className="service-section-content">
          In the fast-paced world of modern business, a sterling reputation is
          your golden ticket. Our precision-engineered press campaigns have a
          proven track record of delivering impressive outcomes. We don't just
          aim for the stars; we navigate the galaxy of possibilities to amplify
          your brand's presence through precisely calibrated channels.
          <br />
          <br />
          🌟 PR STRATEGY<br />
          📰 PRESS RELEASES<br />
          🎙️ PRESS CONFERENCES<br />
          🌐 DIGITAL & SOCIAL PR<br />
          🤝 MEDIA RELATIONS
          <br />
          <br />
          Trust us to sculpt your brand reputation into a masterpiece.
        </Text>
      </Row>
    </div>
  );
}
