import Image from 'next/image';

export function Section1() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div className='w-full h-full absolute top-0 left-0 right-0 z-0'>
                <div className="w-full h-screen bg-gradient-to-b from-[#ED3D3D]/50 to-20% " />
            </div>

            <div className='w-full h-full absolute bottom-0 left-0 right-0 z-0'>
                <div className="w-full h-screen bg-gradient-to-t from-[#ED3D3D]/50 to-20% " />
            </div>

            <div className="size-full flex justify-center absolute">
                <Image src={'/assets/homepage/center-glow.svg'} width={100} height={100} alt='' className='w-screen h-screen object-cover' />
            </div>

            <div className='absolute size-full flex flex-col justify-center items-center'>
                <p className='text-[140px] text-white mb-24 [text-shadow:0px_0px_5px_#fff] font-bold'>Wield</p>
            </div>
        </section>
    )
}
