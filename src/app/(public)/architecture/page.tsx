import React from 'react';
import coreData from "./components/core.json";
import ListTile from './components/list-tile';

const Page = () => {
    return (
        <div className="flex flex-row">  {/* Removed justify-between */}
            <img className="fixed top-0 left-0 w-screen object-fill z-0" src='assets/layout/overlay.png' />
            <div className="mx-10 mt-[100px]">  {/* Added overflow-y-auto and height */}
                <h1 className='text-[3rem] [text-shadow:0px_0px_5px_#fff] my-5 gilroy-bold'>Core Architecture</h1>
                {coreData.map(data => (<ListTile title={data.title} description={data.text} />))}
            </div>
            <div className="relative w-[50vw] h-full">
                <video
                    src="assets/architecture/architecture.mp4"
                    className='object-fill'
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
