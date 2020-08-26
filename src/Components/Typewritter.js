import React from 'react';
import Typewriter from 'typewriter-effect';
import './Typewritter.css';
export const Typewritter = () => {
    return (
        <div className="coontainer">
            <div className='msg'>
                <h3 className="hi">HI, WE'RE JUNTO</h3>
                <h1>We're here to help you</h1>
            </div>
        
            <div className='typer'>
                <h1>
                <Typewriter
                    options={{
                        strings: ['Grow your bussines.', 'Optimize conversions.',
                        'Outrank the competition.', 'Create badass content.', 'Generate more leads.',
                        'Look sexy online.'],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        wrapperClassName:'h2',
                        cursorClassName: 'Typewritter__cursor'
                    }}
                />
                </h1>
            </div>
        </div>
    )
}
