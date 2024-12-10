import Header from '@/app/(public)/_components/header';
import { Section1 } from './_components/section-1';
import { Empty } from './_components/empty';
import { Section2 } from './_components/section-2';

export default async function Page() {
    return (
        <div>
            <Section1 />
            {/* <Empty /> */}
            <Section2/>
        </div>
    );
}
