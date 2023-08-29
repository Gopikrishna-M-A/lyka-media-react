import React from 'react'
import { Row, Typography } from "antd";
const { Text, Title } = Typography;

export default function Events({id}) {
  return (
    <div id={id} className='Service-section' >
              <img className='bg-img' src="/images/event.jpg" alt="" />
                <Row className='service-section-title-wrapper'>
            <Title className='service-section-title'>EVENTS</Title>
        </Row>

        <Row className='service-section-content-wrapper'>
            <Text className='service-section-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit fugiat, velit maiores tempore error distinctio, nostrum eveniet laborum laboriosam quia beatae nihil nobis deleniti quas quod ipsum incidunt delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta voluptas beatae minima velit placeat deserunt maxime ratione aut quos dolorem modi est et libero, voluptatum aspernatur odio sapiente. Neque!</Text>
        </Row>
    </div>
  )
}
