'use client';

import Link from 'next/link';

export function Section2() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div className="absolute left-0 right-0 top-0 z-0 h-full w-full">
                <div className="h-screen w-full bg-gradient-to-b from-[#ED3D3D]/50 to-20%" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-0 h-full w-full">
                <div className="h-screen w-full bg-gradient-to-t from-[#ED3D3D]/50 to-20%" />
            </div>

            <div className="absolute z-50 flex size-full flex-col items-center justify-center gap-y-[150px] [text-shadow:0px_0px_10px_#ED3D3D]">
                <p className="text-center text-3xl text-white">
                    {' '}
                    emerging from <span className="text-[#ED3D3D]">the depths of entropy,</span>
                    <br />
                    this construct transcends boundaries to explore the
                    <br />
                    uncharted realms of creativity...
                </p>

                <div className="flex w-3/4 gap-4">
                    <Link href={'/about'} className="flex-1">
                        <div className="flex w-full flex-col border border-[#ED3D3D] bg-[#700C11]/50 px-4 py-8">
                            <p className="text-xl font-bold text-white">About</p>
                            <p className="text-xs text-[#C4C4C4]">Discover the Origins</p>
                        </div>
                    </Link>

                    <Link href={'/chatbot'} className="flex-1">
                        <div className="flex w-full flex-col border border-[#ED3D3D] bg-[#700C11]/50 px-4 py-8">
                            <p className="text-xl font-bold text-white">Chatbot</p>
                            <p className="text-xs text-[#C4C4C4]">Convers with the Future</p>
                        </div>
                    </Link>

                    <Link href={'/architecture'} className="flex-1">
                        <div className="flex w-full flex-col border border-[#ED3D3D] bg-[#700C11]/50 px-4 py-8">
                            <p className="text-xl font-bold text-white">Architecture</p>
                            <p className="text-xs text-[#C4C4C4]">Unravel the Core</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
