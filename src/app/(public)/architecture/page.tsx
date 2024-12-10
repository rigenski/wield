import React from 'react';
import coreData from "./components/core.json";
import ListTile from './components/list-tile';

const Page = () => {
    return (
        <div className="flex flex-row">
            <img className="fixed top-0 left-0 w-screen object-fill z-0" src='assets/layout/overlay.png' />
            <div className="mx-10 mt-[100px]">
                <h1 className='text-[3rem] [text-shadow:0px_0px_5px_#fff] my-5 font-bold text-white'>Core Architecture</h1>
                {coreData.map(data => (<ListTile title={data.title} description={data.text} />))}
            </div>
            <div className="relative h-full">
                <video
                    src="assets/architecture/architecture.mp4"
                    className='w-[35vw] object-fill'
                    autoPlay
                    muted
                    loop
                    style={{ position: "fixed", top: 0, right: 0, zIndex: -1 }}
                />
            </div>
        </div>
    );
}

export default Page;
