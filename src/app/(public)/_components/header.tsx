'use client';

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
        title: 'Chatbot',
        link: '/chatbot',
        tab: 1,
    },
    {
        title: 'Architecture',
        link: '/architecture',
        tab: 2,
    },
    {
        title: 'About',
        link: '/about',
        tab: 3,
    },
];

const HOME = "/"
const CHATBOT = '/chatbot'
const ARCHITECTURE = "/architecture"
const ABOUT = "/about"

export const Header = () => {
    const [activeTab, setActiveTab] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        switch (pathname) {
            case HOME:
                setActiveTab(0);
                break;
            case CHATBOT:
                setActiveTab(1);
                break;
            case ARCHITECTURE:
                setActiveTab(2);
                break;
            case ABOUT:
                setActiveTab(3)
                break;
            default:
                break;
        }
    }, [pathname]);

    return (
        <header className="fixed top-0 left-0 w-screen z-50 p-4 backdrop-blur-sm">
            <div className='flex w-full items-center container'>

                <div className='flex gap-2 items-center basis-1/4'>
                    <Image src={'/assets/layout/wield.svg'} width={30} height={30} className='w-auto h-[30px]' alt='' />
                    <p className='text-2xl text-white font-bold [text-shadow:0px_0px_3px_#fff]'>Wield</p>
                </div>

                <div className='flex w-full items-center justify-center gap-16 basis-2/4'>
                    {navigations.map((navigation, index) => {
                        return (
                            <Link key={index} href={navigation.link} className={cn('text-xl', `${activeTab === navigation.tab ? "text-wield" : "text-white"}`)}>
                                <p>{navigation.title}</p>
                            </Link>
                        );
                    })}
                </div>

                <div className='flex items-center justify-end w-full basis-1/4 gap-4'>
                    <Link href={'https://x.com/unfound83'}>
                        <Image src={'/assets/layout/x-dev.svg'} width={40} height={40} alt='' className='w-auto h-[40px] hover:animate-shake' />
                    </Link>

                    <Link href={'https://x.com/wield'}>
                        <Image src={'/assets/layout/x-wield.svg'} width={40} height={40} alt='' className='w-auto h-[40px] hover:animate-shake' />
                    </Link>

                    <Link href={''} className='border rounded-full border-[#FA2C2C] px-4 py-2 bg-[#ED0C0C12] cursor-pointer'>
                        <p className='text-[#FA2C2C]'>Buy $WIELD</p>
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Header;
