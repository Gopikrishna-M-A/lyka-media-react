import React from 'react';
import { Carousel } from 'antd';



const News = ({ id }) => {
  return (
    <div id={id} style={{ padding:'20px', backgroundColor: '#f18b5d'}}>
      <Carousel autoplay dot >
        <div>
          <img className='client-logos'  src={process.env.PUBLIC_URL + '/images/1.png'} alt="" />
        </div>
        <div>
          <img className='client-logos'  src={process.env.PUBLIC_URL + '/images/2.png'} alt="" />
        </div>
        <div>
          <img className='client-logos'  src={process.env.PUBLIC_URL + '/images/3.png'} alt="" />
        </div>
        <div>
          <img className='client-logos'  src={process.env.PUBLIC_URL + '/images/4.png'} alt="" />
        </div>
    </Carousel>
    </div>
  );
};

export default News;