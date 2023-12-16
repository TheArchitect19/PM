import React from 'react';
import styled from './Video.module.css'; // Import your CSS file for styling
import sample from "./my-video.mp4";
const VideoPlayer = () => {
  return (
    <div className={styled.videocontainer}>
       <iframe src="https://www.youtube.com/embed/rX6IQE39caQ?si=6Zqn-83AwlQsW46Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
};

export default VideoPlayer;
