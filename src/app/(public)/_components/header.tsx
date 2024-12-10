"use client"

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

const HOME = "/"
const ARCHITECTURE = "/architecture"
const ABOUT = "/about"

export const Header = () => {
    const [activeTab, setActiveTab] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
        switch (pathname) {
            case HOME:
                setActiveTab(0);
                break;
            case ARCHITECTURE:
                setActiveTab(1);
                break;
            case ABOUT:
                setActiveTab(2)
                break;
            default:
                break;
        }
    }, [pathname])

    return (
        <header className="fixed top-0 w-screen z-50 p-4 backdrop-blur-sm">
            <div className="container flex justify-between gap-4 px-4 py-2">
                <div className="flex gap-4">
                    {navigations.map((navigation, index) => {
                        return (
                            <Link key={index} href={navigation.link} className={`text-md ${activeTab === navigation.tab ? "text-wield" : "text-white"}`}>
                                {navigation.title}
                            </Link>
                        );
                    })}
                </div>

                <div className={`rounded-full border ${activeTab === 2 ? "border-wield" : "border-white"} bg-[#393939]/25 px-4 py-2`}>
                    <p className={`font-bold ${activeTab === 2 ? "text-wield" : "text-white"}`}>Try Wield</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
