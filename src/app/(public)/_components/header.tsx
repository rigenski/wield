'use client';

import { X_BUY, X_COIN, X_DEV } from '@/constants/option';
import { cn } from '@/utils/classname';
import Image from 'next/image';
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
        title: 'Interact',
        link: '/interact',
        tab: 1,
    },
    {
        title: 'Architecture',
        link: '/architecture',
        tab: 2,
    },
    {
        title: 'Docs',
        link: '/docs',
        tab: 3,
    },
    {
        title: 'About',
        link: '/about',
        tab: 4,
    },
];

const HOME = '/';
const INTERACT = '/interact';
const ARCHITECTURE = '/architecture';
const DOCS = '/docs';
const ABOUT = '/about';

export const Header = () => {
    const [activeTab, setActiveTab] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        switch (pathname) {
            case HOME:
                setActiveTab(0);
                break;
            case INTERACT:
                setActiveTab(1);
                break;
            case ARCHITECTURE:
                setActiveTab(2);
                break;
            case DOCS:
                setActiveTab(3);
                break;
            case ABOUT:
                setActiveTab(4);
                break;
            default:
                break;
        }
    }, [pathname]);

    return (
        <header className="fixed left-0 top-0 z-50 w-screen p-4 backdrop-blur-sm">
            <div className="container flex w-full items-center">
                <div className="flex basis-1/4 items-center gap-2">
                    <Image src={'/assets/layout/wield.svg'} width={30} height={30} className="h-[30px] w-auto" alt="" />
                    <p className="text-2xl font-bold text-white [text-shadow:0px_0px_3px_#fff]">Wield</p>
                </div>

                <div className="flex w-full basis-2/4 items-center justify-center gap-16">
                    {navigations.map((navigation, index) => {
                        return (
                            <Link
                                key={index}
                                href={navigation.link}
                                className={cn('text-xl', `${activeTab === navigation.tab ? 'text-wield' : 'text-white'}`)}
                            >
                                <p>{navigation.title}</p>
                            </Link>
                        );
                    })}
                </div>

                <div className="flex w-full basis-1/4 items-center justify-end gap-4">
                    <Link href={X_DEV} target="_blank">
                        <Image src={'/assets/layout/x-dev.svg'} width={40} height={40} alt="" className="h-[40px] w-auto hover:animate-shake" />
                    </Link>

                    <Link href={X_COIN} target="_blank">
                        <Image src={'/assets/layout/x-wield.svg'} width={40} height={40} alt="" className="h-[40px] w-auto hover:animate-shake" />
                    </Link>

                    <Link href={X_BUY} target="_blank" className="cursor-pointer rounded-full border border-[#FA2C2C] bg-[#ED0C0C12] px-4 py-2">
                        <p className="text-[#FA2C2C]">Buy $WIELD</p>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
