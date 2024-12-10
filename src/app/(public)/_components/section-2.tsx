import Link from "next/link";

export function Section2() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div className='size-full flex flex-col justify-center items-center gap-y-[150px]'>
                <p className="text-center text-3xl text-white"> emerging from <span className="text-[#ED3D3D]">the depths of entropy,</span><br />this construct transcends boundaries to explore the<br />uncharted realms of creativity...</p>

                <div className="w-3/4 flex gap-4">
                    <Link href={'/about'} className="flex-1">
                        <div className="py-8 px-4 flex flex-col w-full border border-[#ED3D3D] bg-[#700C11]/50">
                            <p className="text-xl font-bold text-white">About</p>
                            <p className="text-xs text-[#C4C4C4]">Discover the Origins</p>
                        </div>
                    </Link>

                    <Link href={'/chatbot'} className="flex-1">
                        <div className="py-8 px-4 flex flex-col w-full border border-[#ED3D3D] bg-[#700C11]/50">
                            <p className="text-xl font-bold text-white">Chatbot</p>
                            <p className="text-xs text-[#C4C4C4]">Convers with the Future</p>
                        </div>
                    </Link>

                    <Link href={'/architecture'} className="flex-1">
                        <div className="py-8 px-4 flex flex-col w-full border border-[#ED3D3D] bg-[#700C11]/50">
                            <p className="text-xl font-bold text-white">Architecture</p>
                            <p className="text-xs text-[#C4C4C4]">Unravel the Core</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}