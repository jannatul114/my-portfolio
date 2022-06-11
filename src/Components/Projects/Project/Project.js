import React from 'react';
// import project1 from '../../images/project-1.PNG';
// import project2 from '../../images/project-2.PNG';
// import project3 from '../../images/project-3.PNG';
import { useNavigate } from 'react-router-dom';
const Project = ({ project }) => {
    const { name, id, code, server, link, description, tools, image } = project;
    const navigate = useNavigate()
    const projectId = (id) => {
        navigate(`/projectdetailse/${id}`)
    }
    return (
        <div>

            <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" class="card w-80 min-h-96 border-2 border-primary bg-base-100 shadow-xl">
                <div className='p-3'>
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            {project?.name}
                            {
                                server && <span class="badge badge-secondary">MERN</span>
                            }
                        </h2>

                        <p className='my-3'>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                        <div class="card-actions justify-center">
                            <div class="badge badge-primary"><a href={code} target={'_blank'}> client-side</a></div>
                            <div class="badge badge-primary"><a href={project?.server} target={'_blank'}> server-side</a></div>
                            <div class="badge badge-primary"><a href={link} target={'_blank'}>Live Link</a> </div>
                        </div>
                        <button onClick={() => projectId(id)} className='btn btn-secondary border-2 border-primary mt-3'>Detailse</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;