import React from "react";
import { Row, Typography } from "antd";
const { Text, Title } = Typography;

export default function Events({ id }) {
  return (
    <div id={id} className="Service-section">
      <img className="bg-img" src="/images/event.jpg" alt="" />
      <Row className="service-section-title-wrapper">
        <Title className="service-section-title">EVENTS</Title>
      </Row>

      <Row className="service-section-content-wrapper para">
        <Text className="service-section-content">
          Event success hinges on the tiniest intricacies. Our nimbleness and
          meticulous dedication have seamlessly orchestrated some of the
          region's most monumental gatherings.
          <br />
          <br />
          🌐 CONFERENCES
          <br />
          🌆 EXHIBITIONS
          <br />
          👔 CORPORATE EVENTS
          <br />
          👥 PUBLIC ENGAGEMENT EVENTS
          <br />
          🏆 SPORT EVENTS
          <br />
          <br />
          We transform events into unforgettable experiences, where every detail
          is a masterpiece, ensuring your occasion stands out in the grand
          tapestry of success.
        </Text>
      </Row>
    </div>
  );
}
