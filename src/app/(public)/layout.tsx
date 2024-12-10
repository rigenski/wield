import type { TLayoutProps } from '@/types/layout';
import Header from './_components/header';

export default async function Layout({ children }: TLayoutProps) {
    return (
        <>
        <Header />
            <main>{children}</main>
        </>
    );
}
