import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
const ProjectDetailse = () => {
    const { id } = useParams()
    const [detailse, setDetailse] = useState([])
    const [singleDetailse, setsingleDetailse] = useState({})
    fetch(`https://raw.githubusercontent.com/jannatul114/my-portfolio/main/public/projects.json`)
        .then(res => res.json())
        .then(data => {
            setDetailse(data);
            const settingDetailse = detailse.find(d => d.id == id)
            setsingleDetailse(settingDetailse);
        })

    // console.log(singleDetailse?.tools);
    // const { tools } = singleDetailse;
    const myTools = singleDetailse?.tools;
    return (
        <div>
            {/* <h1>detailse: {id}</h1>
            <h1>name: {singleDetailse?.name}</h1> */}



            <div class="bg-white h-96 flex items-center justify-center p-12 py-6">
                <div class="mx-auto w-full max-w-screen-lg bg-indigo-400 rounded-xl mt-32 px-5 py-10">
                    <div class="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
                        <div class="flex justify-center md:justify-end">
                            <img class="w-full max-w-sm" src={singleDetailse?.image} alt="Marketing newsletter via computer Illustration in PNG, SVG" />
                        </div>
                        <div class="flex items-center">
                            <div class="mx-auto md:mx-0">
                                <h3 class="text-4xl font-bold text-white">{singleDetailse?.name}</h3>
                                <p class="mt-2 max-w-[20rem] text-white text-sm">{singleDetailse?.description}</p>
                                {
                                    myTools && <p>{myTools.map(t => <span className='badge badge-secondary m-2'>{t}</span>)}</p>
                                }

                                <div class="buttons mt-3">
                                    <a href={singleDetailse?.code} class="btn effect04" data-sm-link-text="CLICK" target="_blank"><span>code</span></a>
                                    <a href={singleDetailse?.link} class="btn effect04 ml-5" data-sm-link-text="CLICK" target="_blank"><span>Link</span></a>

                                    {
                                        singleDetailse?.server && <a href={singleDetailse?.server} class="btn effect04 ml-5" data-sm-link-text="CLICK" target="_blank"><span>Server</span></a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProjectDetailse;