'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface NavigationItem {
    title: string;
    link: string;
    tab: number;
}

const navigations: NavigationItem[] = [
    {
        title: 'Home',
        link: '/',
        tab: 0,
    },
    {
        title: 'Architecture',
        link: '/architecture',
        tab: 1,
    },
    {
        title: 'About',
        link: '/about',
        tab: 2,
    },
];

const HOME = '/';
const ARCHITECTURE = '/architecture';
const ABOUT = '/about';

export const Header = () => {
    const [activeTab, setActiveTab] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        switch (pathname) {
            case HOME:
                setActiveTab(0);
                break;
            case ARCHITECTURE:
                setActiveTab(1);
                break;
            case ABOUT:
                setActiveTab(2);
                break;
            default:
                break;
        }
    }, [pathname]);

    return (
        <header className="fixed left-0 top-0 z-50 w-screen p-4 backdrop-blur-sm">
            <div className="relative">
                <div className="flex items-center justify-between gap-4 px-10 py-2">
                    <div className="flex items-center">
                        <img src="/assets/layout/wieldicon.png" alt="icon" className="mr-2 h-[20px] object-cover" />
                        <span className="">Wield</span>
                    </div>
                    <div className="absolute left-0 right-0 top-0 mx-auto w-screen">
                        <div className="flex gap-[3rem]">
                            {navigations.map((navigation, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={navigation.link}
                                        className={`text-md ${activeTab === navigation.tab ? 'text-wield' : 'text-white'}`}
                                    >
                                        <p>{navigation.title}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex items-center">
                        <img src="/assets/layout/x-dev.png" alt="xdev" className="mr-2 h-[40px] object-cover" />
                        <img src="/assets/layout/x-wield.png" alt="xwield" className="mr-2 h-[40px] object-cover" />
                        <Link href={'/chatbot'} className={`rounded-full border ${activeTab === 2 ? 'border-wield' : 'border-white'} px-4 py-2`}>
                            <p className={`font-bold ${activeTab === 2 ? 'text-wield' : 'text-white'}`}>Buy $WIELD</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
