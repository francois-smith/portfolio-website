import React from 'react';
import Card from '../Card/Card';
import ProjectThumbnail from '../../Media/Images/ProjectThumbnail.png'
import INLThumbnail from '../../Media/Images/INLThumbnail.png'
import NewsLodgeThumbnail from '../../Media/Images/NewsLodge.png'
import { ProjectSection } from './ProjectsStyles';
import { CardsContainer } from '../Card/CardStyles';

const Projects = () => {

    return (
        <ProjectSection id='ProjectsSection'> 
            <h2 class='Section_Heading'>PROJECTS</h2>
            <CardsContainer>
                <Card Type='DESIGNED & CODED' Img={ProjectThumbnail} Description='You can download the code and files for this website using the button below' DownloadText="Download" Download='https://github.com/francois-smith/portfolio-website' shouldHide/>
                <Card Type='DESIGNED & CODED' Img={NewsLodgeThumbnail} Description='News site made for COS216. Full stack website using the LAMP stack' DownloadText="Coming Soon" Download='' linkTo="" shouldHide/>
                <Card Type='CODED' Img={INLThumbnail} Description='Website designed by a group of multimedia students for our module INL 120' DownloadText="Download" Download='https://github.com/Multimedia-Overachievers/INL120' linkTo="https://inl-120.netlify.app/"/>
            </CardsContainer>
            <p id="Project_Footer">And many more to come!</p>
        </ProjectSection>
    );
};

export default Projects;