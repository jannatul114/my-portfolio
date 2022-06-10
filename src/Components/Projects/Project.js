import React from 'react';
import project1 from '../../images/project-1.PNG';
import project2 from '../../images/project-2.PNG';
import project3 from '../../images/project-3.PNG';
const Project = () => {
    return (
        <div id='projects'>
            <h1 className='text-center text-4xl text-primary my-7 font-bold'>My Projects</h1>
            <div className='flex justify-center my-16'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="card w-80 border-2 border-primary shadow-xl">
                        <div className='p-3'>
                            <figure><img src={project1} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    Photographic Place
                                </h2>

                                <p className='my-3'>This is an Independent service provider releted website</p>
                                <div class="card-actions justify-center">
                                    <div class="badge badge-primary"><a href="https://github.com/jannatul114/photographic-place" target={'_blank'}>Code Link</a></div>
                                    <div class="badge badge-primary"><a href="https://photographic-place.web.app/" target={'_blank'}>Live Link</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="card w-80 border-2 border-primary bg-base-100 shadow-xl">
                        <div className='p-3'>
                            <figure><img src={project2} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    Fruits Valley
                                    <span class="badge badge-secondary">Full-stack</span>
                                </h2>

                                <p className='my-3'>This is an Independent service provider releted website</p>
                                <div class="card-actions justify-center">
                                    <div class="badge badge-primary"><a href="https://github.com/jannatul114/warehouse-management" target={'_blank'}> client-side</a></div>
                                    <div class="badge badge-primary"><a href="https://github.com/jannatul114/warehouse-management-server" target={'_blank'}> server-side</a></div>
                                    <div class="badge badge-primary"><a href="https://fruits-valley.web.app/" target={'_blank'}>Live Link</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="card w-80 border-2 border-primary bg-base-100 shadow-xl">
                        <div className='p-3'>
                            <figure><img src={project3} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    Todo App
                                    <span class="badge badge-secondary">Full-stack</span>

                                </h2>

                                <p className='my-3'>This is a warehouse management releted website</p>
                                <div class="card-actions justify-center">
                                    <div class="badge badge-primary"><a href="https://github.com/jannatul114/todo-app-client-side" target={'_blank'}> client-side</a></div>
                                    <div class="badge badge-primary"><a href="https://github.com/jannatul114/todo-app-server-side" target={'_blank'}> server-side</a></div>
                                    <div class="badge badge-primary"><a href="https://todo-app-client-side.web.app/" target={'_blank'}>Live Link</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;