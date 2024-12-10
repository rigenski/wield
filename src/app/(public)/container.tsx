'use client'

import { useEffect, useRef, useState } from "react";
import { Section1 } from "./_components/section-1";
import { Section2 } from "./_components/section-2";

export default function Container() {
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
        <div className="h-screen w-full bg-[url('/assets/homepage/center-glow.svg')] bg-cover bg-top bg-no-repeat">
            <div className="relative h-screen w-full overflow-auto" ref={scrollContainerRef}>
                <Section1 />
                <Section2 />
            </div>
        </div>
    )
}