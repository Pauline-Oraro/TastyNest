import React, { useRef } from 'react';
import {meal} from "../../constants"
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import './Intro.css';
import { useState } from 'react';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if(playVideo){
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return(
  <div className='app__video'>

    <video 
    src={meal}
    ref={vidRef}
    type='video/mp4'
    loop
    controls={false}
    muted
    />

    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
        {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
      </div>
    </div>

  </div>
)};

export default Intro;
