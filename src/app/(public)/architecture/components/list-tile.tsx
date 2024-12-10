import React from 'react'

const ListTile = ({ title, description }: { title: string, description: string }) => {
    return (
        <section className="px-4 py-10 border-[#ED3D3D] border-2 w-[60vw] text-[1.5rem] mb-10 z-20">
            <p className='text-[#ED3D3D] [text-shadow:0px_0px_5px_#ED3D3D]'>{title}</p>
            <p>{description}</p>
        </section>
    )
}

export default ListTile