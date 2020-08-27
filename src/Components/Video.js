import React from 'react';
import video from './junto.mp4';
// import './Video.css';

export const Video = () => {
    return (
            <div className='video'>
                <video src={video} id='myVideo' autoPlay loop muted height='100%' width='100%' />
            </div>
    )
}
