import defaultTheme from 'tailwindcss/defaultTheme';

import tailwindcssForms from '@tailwindcss/forms';
import tailwindcssTypography from '@tailwindcss/typography';
import tailwindcssContainerQueries from '@tailwindcss/container-queries';

import tailwindAnimate from 'tailwindcss-animate';

import type { Config } from 'tailwindcss';

const config = {
    darkMode: ['selector'],
    content: ['./src/**/*.{ts,tsx}'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1440px',
            },
        },
        extend: {
            fontFamily: {
                balsamiqSans: ['var(--font-balsamiq-sans)', ...defaultTheme.fontFamily.sans],
                mulish: ['var(--font-mulish)', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: 'hsl(var(--success-foreground))',
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning))',
                    foreground: 'hsl(var(--warning-foreground))',
                },
                info: {
                    DEFAULT: 'hsl(var(--info))',
                    foreground: 'hsl(var(--info-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            backgroundImage: {
                'custom-gradient': 'linear-gradient(to top right, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                shake: {
                    '0%, 100%': { transform: 'translate(0)' },
                    '25%': { transform: 'translate(-2px, 2px)' },
                    '50%': { transform: 'translate(2px, -2px)' },
                    '75%': { transform: 'translate(-2px, 2px)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                shake: 'shake 0.4s ease-in-out',
            },
            rotate: {
                '320': '320deg',
            },
        },
    },
    plugins: [tailwindcssForms, tailwindcssTypography, tailwindcssContainerQueries, tailwindAnimate],
} satisfies Config;

export default config;