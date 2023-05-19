import React from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';
import hero from "../assets/svg/video.png";
import styles from "./Video.module.css"

function MyVideoPlayer()  {
  return (
    <div className={styles.vid}>
        <Player poster={hero} >
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
       <BigPlayButton position="center"/>
      <ControlBar autoHide={false} className="my-class" />
    </Player>
    </div>
  );
};

export default MyVideoPlayer;
