import Image from 'next/image';

export function Section1() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div className="size-full flex justify-center absolute">
                <Image src={'/assets/homepage/center-glow.svg'} width={100} height={100} alt='' className='w-full h-screen' />
            </div>

            <div className='size-full flex flex-col justify-center items-center'>
                <p className='text-[140px] text-white mb-24'>Wield</p>
            </div>
        </section>
    )
}
