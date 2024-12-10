import { Section1 } from './_components/section-1';
import { Section2 } from './_components/section-2';

export default async function Page() {
    return (
        <div className="h-screen w-full bg-[url('/assets/homepage/center-glow.svg')] bg-cover bg-top bg-no-repeat">
            <div className="relative h-screen w-full">
                <div className="h-screen w-full overflow-y-auto">
                    <Section1 />
                    <Section2 />
                </div>
            </div>
        </div>
    );
}
