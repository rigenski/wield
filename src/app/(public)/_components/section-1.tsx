'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function Section1() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div className="absolute left-0 right-0 top-0 z-0 h-full w-full">
                <div className="h-screen w-full bg-gradient-to-b from-[#ED3D3D]/50 to-20%" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-0 h-full w-full">
                <div className="h-screen w-full bg-gradient-to-t from-[#ED3D3D]/50 to-20%" />
            </div>

            <div className="absolute flex size-full flex-col items-center justify-center">
                <motion.p className="mb-24 text-[140px] font-bold text-[#FFE0E0] [text-shadow:0px_0px_5px_#fff]" style={{ opacity }}>
                    Wield
                </motion.p>
            </div>
        </section>
    );
}
