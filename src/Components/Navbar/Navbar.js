import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* <div class="navbar bg-primary text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:h hrefden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-w hrefth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact bg-primary dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><a href='#about'>About</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='#contact'>Contact Me</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Mithila</a>
                </div>
                <div class="navbar-end h hrefden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><a href='#about'>About</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contact Me</a></li>
                    </ul>
                </div>
            </div> */}



            <div class="navbar bg-primary text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li className='btn hover:btn-primary'><a href='#about'>About</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='#contact'>Contact Me</a></li>
                            <li><a href='/blogs'>Blogs</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl"><Link to={'/home'}>Mithila</Link></a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><a href='#about'>About</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='/blogs'>Blogs</a></li>
                        <li></li>

                    </ul>
                </div>

                <div className='navbar-end'>
                    <button className='btn btn-secondary'><a href='#contact'>contact</a></button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;