import React from 'react';
import girl from '../../images/about.png'

const About = () => {
    return (
        <div className='mt-16'>
            <section class=" dark:bg-gray-800">
                <div id='about' class="container px-6 py-16 mx-auto">
                    <h1 className='text-center text-4xl text-primary my-3 font-bold'>About</h1>

                    <div class="items-center lg:flex justify-center">
                        <div class="mt-8 lg:mt-0 lg:w-1/2">
                            <div class="flex items-center justify-center lg:justify-end">
                                <div class="max-w-xl">
                                    <img class="object-cover object-center w-full h-96" src={girl} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/2" data-aos="fade">
                            <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">About Me</h2>

                            <p className='my-3'> I am Mithila, A passionate fresher Front-end developer. As I get in touch with codes, I invest my time exploring and solving them. Because I found it challenging and interesting. I would like to invest myself to provide the potential to my employer's company through the innovative initiative, learning, and practicing mentality with full efforts.</p>

                            <button className='btn btn-primary my-4 rounded-none'>Learn More About Me</button>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;