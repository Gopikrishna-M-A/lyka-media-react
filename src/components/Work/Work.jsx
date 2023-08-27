import React from 'react';
import Post from '../Post/Post'

const Work = ({ id, content }) => {
  return (
    <div id={id} className='work' style={{ padding: '20px', backgroundColor: '#6a2870'}}>
      <Post></Post>
    </div>
  );
};

export default Work;
