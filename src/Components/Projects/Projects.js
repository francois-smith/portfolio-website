import React from 'react';
import Card from '../Card/Card';
import ProjectThumbnail from '../../Media/Images/ProjectThumbnail.png'
import INLThumbnail from '../../Media/Images/INLThumbnail.png'
import { ProjectSection } from './ProjectsStyles';
import { CardsContainer } from '../Card/CardStyles';

const Projects = () => {

    return (
        <ProjectSection id='ProjectsSection'> 
            <h2 class='Section_Heading'>PROJECTS</h2>
            <CardsContainer>
                <Card Type='DESIGNED & CODED' Img={ProjectThumbnail} Description='You can download the code and files for this website using the button below' Download='https://github.com/francois-smith/portfolio-website'/>
                <Card Type='CODED' Img={INLThumbnail} Description='Website designed by a group of multimedia students for our module INL 120' Download='https://github.com/Multimedia-Overachievers/INL120'/>
            </CardsContainer>
            <p id="Project_Footer">And many more to come!</p>
        </ProjectSection>
    );
};

export default Projects;