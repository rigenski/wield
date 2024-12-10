import React from 'react'

const ListTile = ({ title, description }: { title: string, description: string }) => {
    return (
        <div
            className="px-4 py-10 border-[#ED3D3D] border-2 w-[60vw] text-[1.5rem] mb-10 z-20"
            style={{
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
        >
            <p className='text-[#ED3D3D] [text-shadow:0px_0px_5px_#ED3D3D] gilroy-bold'>{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default ListTile