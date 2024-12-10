'use client';


interface Section1Props {
    height: number;
    activeHeight: number;
}

export function Section1({ height, activeHeight }: Section1Props) {
    const opacity = () => {
        const newOpacity = Math.max(0, Math.min(1, 1 - activeHeight / height));

        return newOpacity;
    };

    const scale = () => {
        const newScale = Math.max(0, Math.min(1, 1 - activeHeight / height));

        return newScale;
    };

    return (
        <div className="relative w-full">
            <section className="relative h-screen w-full overflow-hidden" style={{ height: '200vh' }}>
                <div className="flex h-full w-full flex-col justify-between">
                    <div className="w-full">
                        <div className="h-screen w-full bg-gradient-to-b from-[#ED3D3D]/50 to-20%" />
                    </div>

                </div>
            </section>

            <div className="absolute left-[calc(50%-210px)] z-50 transition-none" style={{ top: `${activeHeight + (height / 2 - 100)}px`, opacity: opacity(), transform: `scale(${scale()}) translateY(${activeHeight}px)` }}>
                <div
                    className="text-[140px] font-bold text-[#FFE0E0] [text-shadow:0px_0px_5px_#fff]"
                >
                    Wield
                </div>
            </div>
        </div>
    );
}
