import React from 'react';

const Skills = () => {
    return (
        <div id='skills'>
            <h1 className='text-center text-4xl text-primary my-3 font-bold'>My Skills</h1>

            <div class="blogs__wraper py-20 px-10">
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                    <div data-aos="fade-up" data-aos-duration="1000" className='blogs bg-secondary shadow-lg mr-5 p-2 border-secondary'>
                        <h1 className='text-2xl font-bold   text-center mb-5'>Front-End</h1>
                        <div className='flex justify-center'>
                            <div>
                                <p>HTML: <progress class="progress   progress-primary w-56" value="90" max="100"></progress></p>
                                <p>CSS: <progress class="progress   progress-primary w-56" value="80" max="100"></progress></p>
                                <p>JS: <progress class="progress   progress-primary w-56" value="50" max="100"></progress></p>
                                <p>React: <progress class="progress   progress-primary w-56" value="50" max="100"></progress></p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className='blogs  bg-secondary shadow-lg mr-5 p-3'>
                        <h1 className='text-2xl font-bold   text-center mb-5'>Backend</h1>
                        <div className='flex justify-center'>
                            <div>
                                <p>Mongodb: <progress class="progress   progress-primary w-56" value="45" max="100"></progress></p>
                                <p>Express: <progress class="progress   progress-primary w-56" value="33" max="100"></progress></p>
                                <p>Node: <progress class="progress   progress-primary w-56" value="35" max="100"></progress></p>
                                <p>JS: <progress class="progress   progress-primary w-56" value="35" max="100"></progress></p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className='blogs  bg-secondary shadow-lg mr-5 p-2'>
                        <h1 className='text-2xl font-bold   text-center mb-5'>Frameworks</h1>
                        <div className='flex justify-center'>
                            <div>
                                <p>Tailwind: <progress class="progress   progress-primary w-56" value="85" max="100"></progress></p>
                                <p>Bootstrap: <progress class="progress   progress-primary w-56" value="99" max="100"></progress></p>
                                <p>DaisyUi: <progress class="progress   progress-primary w-56" value="35" max="100"></progress></p>
                                <p>Material-UI: <progress class="progress   progress-primary w-56" value="35" max="100"></progress></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;