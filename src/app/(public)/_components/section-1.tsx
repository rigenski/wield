'use client';

import { useEffect, useRef, useState } from "react";

export function Section1() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                setScrollPosition(scrollContainerRef.current.scrollTop);
            }
        };

        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative w-full">
            <section className="relative h-screen w-full overflow-hidden" style={{ height: '200vh' }}>
                <div className="flex h-full w-full flex-col justify-between">
                    <div className="h-full w-full">
                        <div className="h-screen w-full bg-gradient-to-b from-[#ED3D3D]/50 to-20%" />
                    </div>

                    <div className="h-full w-full">
                        <div className="h-screen w-full bg-gradient-to-t from-[#ED3D3D]/50 to-20%" />
                    </div>
                </div>
            </section>

            <div className="absolute left-1/2 top-1/4 z-50">
                <div
                    className="-ml-48 mb-24 text-[140px] font-bold text-[#FFE0E0] [text-shadow:0px_0px_5px_#fff]"
                >
                    Wield
                </div>
            </div>
        </div>
    );
}
