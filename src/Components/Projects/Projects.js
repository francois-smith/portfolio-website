import React from 'react';
import Card from '../Card/Card';
import Placeholder from '../../Media/Images/PlaceHolder.png'
import { ProjectSection } from './ProjectsStyles';
import { CardsContainer } from '../Card/CardStyles';

const Projects = () => {

    return (
        <ProjectSection> 
            <h2 class='Section_Heading'>PROJECTS</h2>
            <CardsContainer>
                <Card Type='DESIGNED'Img={Placeholder} Description='waddddddddddwadwwwwwwwwwwwwwwwwwaaaaaaaaaaadddddddd' Download='https://Google.com'/>
                <Card Type='DESIGNED'Img={Placeholder} Description='waddddddddddwadwwwwwwwwwwwwwwwwwaaaaaaaaaaadddddddd' Download='https://Google.com'/>
                <Card Type='DESIGNED & CODED'Img={Placeholder} Description='waddddwwwwwwwwwwwwwwwwwwadadaaaaaaaaaaaaaaaaaadddddddd' Download='https://Google.com'/>
                <Card Type='DESIGNED'Img={Placeholder} Description='waddddddddddwadwwwwwwwwwwwwwwwwwwwadadaaaaaaaaaaaaaaaaaadddddddd' Download='https://Google.com'/>
                <Card Type='DESIGNED'Img={Placeholder} Description='waddddddddddwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadadaaaaaaaaaaaaaaaaaadddddddd' Download='https://Google.com'/>
                <Card Type='DESIGNED'Img={Placeholder} Description='waddddddddddwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadadaaaaaaadddddddd' Download='https://Google.com'/>
            </CardsContainer>
            <p id="Project_Footer">And many more to come!</p>
        </ProjectSection>
    );
};

export default Projects;