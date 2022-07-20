import React from 'react';
import { AboutParagraph, AboutSection, AboutCard, AboutCards, AboutCardTitle, AboutCardDescription} from './AboutStyles';

const Card: React.FC = () => {
    return (
       <AboutSection id='AboutSection'>
            <h2 className='Section_Heading'>ABOUT ME</h2>
            <AboutParagraph>  
                Hey there! I am a developer based in South Africa working on all forms of digital products, while loving what i do!
            </AboutParagraph>
            <div className="about-divider">
                <img src="/Media/SVG/divider.svg" alt=""/>
            </div>
            <AboutCards>
                <AboutCard>
                    <AboutCardTitle>
                        <img src="/Media/Images/Design.png"></img>
                        <h3>DESIGN</h3>
                    </AboutCardTitle>
                    <AboutCardDescription>
                        Not a designer? No problem! I'll design your website in Figma according to your needs and tweak the parts you don't like. I will help you make an aesthetically beautiful website. I am also a logo designer.
                    </AboutCardDescription>
                </AboutCard>
                <AboutCard>
                    <AboutCardTitle>
                        <img src="/Media/Images/Development.png"></img>
                        <h3>DEVELOPMENT</h3>
                    </AboutCardTitle>
                    <AboutCardDescription>
                        Leave the development to me. Using tools and libraries such as React and Styled Components I'll build you a functional and performant website. All code is handwritten by me, with no generic templates.
                    </AboutCardDescription>
                </AboutCard>
                <AboutCard>
                    <AboutCardTitle>
                        <img src="/Media/Images/Maintenance.png"></img>
                        <h3>MAINTENANCE</h3>
                    </AboutCardTitle>
                    <AboutCardDescription>
                        Unsure what to do once you have a functional website? I'll help you set up hosting and your domain. Keep it up and running with occasional updates to the codebase if needed.
                    </AboutCardDescription>
                </AboutCard>
            </AboutCards>
       </AboutSection>
    );
};

export default Card;