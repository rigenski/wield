import { generateRandomText } from '@/utils/randomizeText'
import React from 'react'
import coreData from "./components/core.json"
import ListTile from './components/list-tile'

const Page = () => {
    return (
        <div className="flex flex-row justify-between">
            <div className="mx-10 mt-[100px]">
                <img className="absolute top-0 left-0 w-screen object-fill z-10" src='assets/layout/overlay.png' />
                
                    <h1 className='text-[3rem] [text-shadow:0px_0px_5px_#fff] my-5'>Core Architecture</h1>
                    {coreData.map(data => (<ListTile title={data.title} description={data.text} />))}
                
            </div>
            <div>
                <video
                    className='h-[120vh] overflow-hidden'
                    src="assets/architecture/architecture.mp4"
                    autoPlay
                    muted
                    loop
                    style={{ overflow: "hidden" }}
                />
            </div>
        </div>
    )
}

export default Page