import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;