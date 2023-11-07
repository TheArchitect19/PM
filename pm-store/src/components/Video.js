import React from 'react';
import styled from './Video.module.css'; // Import your CSS file for styling
import sample from "./my-video.mp4";
const VideoPlayer = () => {
  return (
    <div className={styled.videocontainer}>
      <video controls className={styled.videoelement} >
        <source src={sample} type="video/mp4" />
        {/* You can add multiple source elements for different video formats (e.g., WebM, Ogg) */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
