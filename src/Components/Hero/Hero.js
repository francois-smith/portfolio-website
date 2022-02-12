import React from 'react';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import { HeroSection, HeroInfo} from './HeroStyled';

const Hero = () => {
    return (
       <HeroSection>
           <HeroInfo>
                <p id='Welcome'>
                    <span>Hi, my name is</span>
                </p>
                <p id='Name'>
                    <span class='Text-Gradient'>Francois Smith</span>
                </p>
                <p id='Dev'>
                    <span>Web Developer / UI Designer</span>
                </p>
           </HeroInfo>
           <BackgroundAnimation/>
       </HeroSection>
    );
};

export default Hero;