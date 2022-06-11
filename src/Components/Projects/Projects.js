import React, { useEffect, useState } from 'react';
import Project from './Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/jannatul114/my-portfolio/main/public/projects.json`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div id='projects'>
            <h1 className='text-center text-4xl text-primary my-7 font-bold'>My Projects</h1>
            <div className='flex justify-center my-16'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                    {
                        projects.map(project => <Project project={project} key={project?.id}></Project>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Projects;