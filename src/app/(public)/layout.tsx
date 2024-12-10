import type { TLayoutProps } from '@/types/layout';
import Header from './_components/header';

function Layout({ children }: TLayoutProps) {
    return (
        <>
            <main id='landing-page-wield'>
                <Header />
                {children}
            </main>
        </>
    );
}

export default Layout
