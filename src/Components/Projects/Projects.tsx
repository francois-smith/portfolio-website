import React from 'react';
import { ProjectSection } from './ProjectsStyles';

const Projects: React.FC = () => {
    return (
        <ProjectSection id='ProjectsSection'> 
            <h2 className='Section_Heading'>PROJECTS</h2>
            <p id="Project_Footer">And many more to come!</p>
        </ProjectSection>
    );
};

export default Projects;