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
        <header className="top-0 left-0 right-0 z-50 p-4 backdrop-blur-sm absolute">
            <div className="container flex justify-between items-center gap-4 px-4 py-2">
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

                <div className="rounded-full border border-white bg-[#393939]/25 px-4 py-2">
                    <p className="font-bold text-white">Try Wield</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
