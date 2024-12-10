import Link from 'next/link';

interface NavigationItem {
    title: string;
    link: string;
}

const navigations: NavigationItem[] = [
    {
        title: 'About',
        link: '/about',
    },
    {
        title: 'Chatbot',
        link: '/chatbot',
    },
    {
        title: 'Architecture',
        link: '/architecture',
    },
];

export const Header = () => {
    return (
        <header className="fixed top-0 w-screen z-50 p-4 backdrop-blur-sm">
            <div className="container flex items-center gap-4 px-4 py-2">
                {/* Pages */}
                <div className="flex gap-4">
                    {navigations.map((navigation, index) => {
                        return (
                            <Link key={index} href={navigation.link} className="text-md text-white">
                                {navigation.title}
                            </Link>
                        );
                    })}
                </div>

                <Link href={'/'} className="flex-1">
                    <p className="text-center text-3xl font-bold text-white">Wield</p>
                </Link>

                <div className="rounded-full border border-white bg-[#393939]/25 px-4 py-2">
                    <p className="font-bold text-white">Try Wield</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
