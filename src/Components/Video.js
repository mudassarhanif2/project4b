import React from 'react';
import video from './junto.mp4';
import './Video.css';

export const Video = () => {
    return (
        <div className='main'>
            <div className='video'>
                <video id='myVideo' autoPlay loop>
                    <source src={video} type='video/mp4' />
                </video>
            </div>
            <div className='button'><a href="">Let's make it happen</a></div>
        </div>
    )
}
