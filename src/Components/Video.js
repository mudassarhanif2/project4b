import React from 'react';
import video from './junto.mp4';
// import './Video.css';

export const Video = () => {
    return (
        <div className='main'>
            <div className='video'>
                <video src={video} id='myVideo' autoPlay loop height='100%' width='100%' />
            </div>
            <div className='button'><button href="">Let's make it happen</button></div>
        </div>
    )
}
