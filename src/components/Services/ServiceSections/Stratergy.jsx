import React from "react";
import { Row, Typography } from "antd";
const { Text, Title } = Typography;

export default function Stratergy({ id }) {
  return (
    <div id={id} className="Service-section">
      <img className="bg-img" src="/images/Chess.png" alt="" />
      <Row className="service-section-title-wrapper">
        <Title className="service-section-title">STRATERGY & CONSULTANCY</Title>
      </Row>

      <Row className="service-section-content-wrapper para">
        <Text className="service-section-content">
          Strategy is the compass that guides us through the labyrinth of
          challenges and opportunities. A well-crafted strategy is the key to
          unlocking the potential of your brand, business, or organization. Our
          team of strategy experts is dedicated to uncovering every hidden
          opportunity and charting a course towards success.
          <br />
          <br />
          When executed with precision, a tailor-made strategy has the power to
          transform behaviors in the exact direction we envision.
        </Text>
      </Row>
    </div>
  );
}
