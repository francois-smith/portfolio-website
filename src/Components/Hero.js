import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';

const Hero = () => {
    return (
       <div id="Hero-Section">
           <div id="Info">
                <p id='Welcome'>
                    <span>Hi, my name is</span>
                </p>
                <p id='Name'>
                    <span class='Text-Gradient'>Francois Smith</span>
                </p>
                <p id='Dev'>
                    <span>Web Developer / UI Designer</span>
                </p>
           </div>
           <BackgroundAnimation/>
       </div>
    );
};

export default Hero;