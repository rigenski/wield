import '@/styles/main.css';

import Aos from '@/components/aos';
import MaintenanceMode from '@/components/maintenance-mode';
import { themeConfig } from '@/constants/config';
import type { TLayoutProps } from '@/types/layout';
import { cn } from '@/utils/classname';
import type { Metadata } from 'next';
import { PublicEnvScript } from 'next-runtime-env';
import localFont from 'next/font/local';
import { Analytics, Providers } from './providers';

const fontGilroy = localFont({
    src: [
        {
            path: '../../public/assets/fonts/Gilroy-Regular.ttf',
            weight: '400',
        },
        {
            path: '../../public/assets/fonts/Gilroy-Bold.ttf',
            weight: '500',
        },
    ],
    variable: '--font-cabinet-groteks',
});

export async function generateMetadata(): Promise<Metadata> {
    const config = themeConfig;

    if (!config) return {};

    return {
        title: {
            template: '%s',
            default: `${config.meta.title} - ${config.meta.subtitle}` || '',
        },
        description: config.meta.description || '',
        openGraph: {
            title: `${config.meta.title}` || '',
            description: config.meta.description || '',
            url: config.meta.url || '',
            images: [
                {
                    url: config.meta.logo.mark || '',
                    alt: config.meta.name || '',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${config.meta.title}` || '',
            description: config.meta.description || '',
            images: config.meta.logo.mark ? [config.meta.logo.mark] : [],
        },
        icons: {
            icon: [
                {
                    media: '(prefers-color-scheme: light)',
                    url: config.meta.favicon,
                    href: config.meta.favicon,
                },
                {
                    media: '(prefers-color-scheme: dark)',
                    url: config.meta.favicon,
                    href: config.meta.favicon,
                },
            ],
        },
    };
}

export default async function Layout({ children }: TLayoutProps) {
    const config = themeConfig;

    return (
        <>
            <Aos />
            <html lang="en" className={cn(['scroll-smooth [--scroll-mt:9.875rem]', 'lg:[--scroll-mt:6.3125rem]'])} suppressHydrationWarning>
                <head>
                    <PublicEnvScript />
                </head>
                <body className={cn([fontGilroy.variable, 'font-gilroy relative bg-[url(/assets/layout/background.png)] antialiased'])}>
                    {!config?.maintenance?.isMaintenance ? (
                        <>
                            <Analytics config={config} />
                            <Providers config={config}>{children}</Providers>
                        </>
                    ) : (
                        <MaintenanceMode config={config} />
                    )}
                </body>
            </html>
        </>
    );
}
