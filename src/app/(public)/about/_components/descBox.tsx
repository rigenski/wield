import Image from 'next/image'
import React from 'react'

const DescBox = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => {
    return (
        <div className="flex-1 py-8 px-4 flex flex-col gap-2 border justify-center "
            style={{
                backgroundColor: 'rgba(237, 61, 61, 0.18)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(2.7px)',
                WebkitBackdropFilter: 'blur(2.7px)',
                border: '1px solid rgba(237, 61, 61, 0.52)',
            }}
        >
            <div className="flex flex-col gap-1 items-start">
                <Image src={icon} width={40} height={40} alt="icon" className="w-auto h-[25px]" />
                <p className="text-xl text-[#ED3D3D] [text-shadow:0px_0px_3px_#ED3D3D] font-bold">{title}</p>
            </div>

            <p className="text-sm w-full h-min text-ellipsis text-[#C4C4C4]">{desc}</p>
        </div>
    )
}

export default DescBox