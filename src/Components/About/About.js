import React from 'react';
import { AboutParagraph, AboutSection } from './AboutStyles';

const Card = () => {
    return (
       <AboutSection>
            <h2 class='Section_Heading'>ABOUT ME</h2>
            <AboutParagraph>  
                I am a developer based in South Africa. I have had a passion for all forms of coding since my very first 
                “Hello World”. My dream is to build innovative products that bring joy to the people using them.
            </AboutParagraph>
            <svg className="GradientUnderline" width="531" height="16" viewBox="0 0 531 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_374_87)">
                     <path d="M8 0C5.79086 1.93129e-07 4 1.79086 4 4C4 6.20914 5.79086 8 8 8L8 0ZM523 7.99995C525.209 7.99995 527 6.20909 527 3.99995C527 1.79082 525.209 -4.52159e-05 523 -4.50227e-05L523 7.99995ZM8 8L523 7.99995L523 -4.50227e-05L8 0L8 8Z" fill="url(#paint0_linear_374_87)"/>
                </g>
                <defs>
                    <filter id="filter0_d_374_87" x="0" y="0" width="531" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_374_87"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_374_87" result="shape"/>
                    </filter>
                        <linearGradient id="paint0_linear_374_87" x1="-2.61855" y1="4" x2="0.301908" y2="44.3294" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00ADEE"/>
                            <stop offset="0.578125" stop-color="#584895"/>
                    </linearGradient>
                </defs>
            </svg>
       </AboutSection>
    );
};

export default Card;