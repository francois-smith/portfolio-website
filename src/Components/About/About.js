import React from 'react';
import Mainteneance from '../../Media/Images/Maintenance.png';
import Design from '../../Media/Images/Design.png';
import Development from '../../Media/Images/Development.png';
import Fade from 'react-reveal/Fade';
import { AboutParagraph, AboutSection, AboutCard, AboutCards, AboutCardTitle, AboutCardDescription} from './AboutStyles';

const Card = () => {
    return (
       <AboutSection id='AboutSection'>
            <h2 class='Section_Heading'>ABOUT ME</h2>
            <Fade left>
                <AboutParagraph>  
                    I am a developer based in South Africa. I have had a passion for all forms of coding since my very first 
                    “Hello World”. My dream is to build innovative products that bring joy to the people using them.
                </AboutParagraph>
            </Fade>
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
            <Fade left>
                <AboutCards>
                        <AboutCard>
                            <AboutCardTitle>
                                <img src={Design}></img>
                                <h3>DESIGN</h3>
                            </AboutCardTitle>
                            <AboutCardDescription>
                                I can design the site from scratch within figma according to your desires and needs. I can also design custom logos and vectors.
                            </AboutCardDescription>
                        </AboutCard>
                        <AboutCard>
                            <AboutCardTitle>
                                <img src={Development}></img>
                                <h3>DEVELOPMENT</h3>
                            </AboutCardTitle>
                            <AboutCardDescription>
                                I can develop the website using HTML, CSS, JavaScrip and Angular/React. The code will be hand written by me, no templates.
                            </AboutCardDescription>
                        </AboutCard>
                        <AboutCard>
                            <AboutCardTitle>
                                <img src={Mainteneance}></img>
                                <h3>MAINTENANCE</h3>
                            </AboutCardTitle>
                            <AboutCardDescription>
                                I will setup the initial hosting and uploading of your website, as well as the required updates based on the project.
                            </AboutCardDescription>
                        </AboutCard>
                </AboutCards>
                </Fade>
       </AboutSection>
    );
};

export default Card;