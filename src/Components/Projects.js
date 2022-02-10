import React from 'react';
import Card from './Card';
import Placeholder from '../Media/Images/PlaceHolder.png'

const Project = () => {
    return (
        <div id="ProjectSection">
            <h2 class='Section_Heading'>PROJECTS</h2>
            <div id='Cards'>
                <Card Type='DESIGNED'Img={Placeholder} Description='waddddddddddwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwadadaaaaaaaaaaaaaaaaaadddddddd' Download='Google.com'/>
            </div>
        </div>
    );
};

export default Project;