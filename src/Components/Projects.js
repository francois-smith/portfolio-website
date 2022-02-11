import React from 'react';
import Card from './Card';
import Placeholder from '../Media/Images/PlaceHolder.png'

const Projects = () => {

    return (
        <div id="ProjectsSection"> 
            <h2 class='Section_Heading'>PROJECTS</h2>
            <div id='Cards'>
                <Card Type='DESIGNED'Img={Placeholder} Description='waddddddddddwadwwwwwwwwwwwwwwwwwaaaaaaaaaaadddddddd' Download='https://Google.com'/>
                <Card Type='DESIGNED'Img={Placeholder} Description='waddddddddddwadwwwwwwwwwwwwwwwwwaaaaaaaaaaadddddddd' Download='https://Google.com'/>
                <Card Type='DESIGNED & CODED'Img={Placeholder} Description='waddddwwwwwwwwwwwwwwwwwwadadaaaaaaaaaaaaaaaaaadddddddd' Download='https://Google.com'/>
                <Card Type='DESIGNED'Img={Placeholder} Description='waddddddddddwadwwwwwwwwwwwwwwwwwwwadadaaaaaaaaaaaaaaaaaadddddddd' Download='https://Google.com'/>
                <Card Type='DESIGNED'Img={Placeholder} Description='waddddddddddwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadadaaaaaaaaaaaaaaaaaadddddddd' Download='https://Google.com'/>
                <Card Type='DESIGNED'Img={Placeholder} Description='waddddddddddwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadadaaaaaaadddddddd' Download='https://Google.com'/>
            </div>
            <p id="Project_Footer">And many more to come!</p>
        </div>
    );
};

export default Projects;