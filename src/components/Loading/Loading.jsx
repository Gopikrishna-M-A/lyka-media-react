import React from 'react';
import { Progress } from 'antd';


const Loading = ({ progress }) => {
  return (
    <div className="loading">
      <Progress type="circle" percent={progress} strokeColor={"#000"}/>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
