'use client';

import { useEffect, useRef, useState } from 'react';
import { Section1 } from './_components/section-1';
import { Section2 } from './_components/section-2';
import Image from 'next/image';
import { RandomizedTextAnimation } from '@/components/randomized-text-animation';

export default function Container() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const opacity = () => {
        const newOpacity = Math.max(0, Math.min(1, 1 - scrollPosition / window.innerHeight));

        return newOpacity;
    };

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
        <div className="relative h-screen w-full">
            <RandomizedTextAnimation />

            <div className="absolute left-0 right-0 top-0 z-10">
                <Image
                    src="/assets/homepage/center-glow.png"
                    alt="center-glow"
                    width={480}
                    height={480}
                    className="h-screen w-full object-cover object-center"
                    style={{ opacity: opacity() }}
                />
            </div>
            <div className="relative z-10 h-screen w-full overflow-auto" ref={scrollContainerRef}>
                <Section1 height={window.innerHeight} activeHeight={scrollPosition} />
                <Section2 />
            </div>
        </div>
    );
}
