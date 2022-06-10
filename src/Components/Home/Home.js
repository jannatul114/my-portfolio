import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Project from '../Projects/Project';
import Skills from '../Skills/Skills';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Project />
            <Contact />
        </div>
    );
};

export default Home;