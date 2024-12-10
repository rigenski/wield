'use client';

import { X_COIN } from '@/constants/option';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <div className="pb-48 pt-16">
            <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                    <p className="mb-4">
                        Follow our Developer and WIELD to make sure
                        <br /> you don’t miss out on our latest updates and
                        <br />
                        announcements
                    </p>
                    <div className="flex gap-4">
                        <Link className="hover:animate-shake" href={X_COIN} target="_blank">
                            <div className="w-[480px] bg-wield p-6">X $WIELD</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mb-12">
                <div className="w-full border-[0.5px] border-[#F1EEE5] opacity-50"></div>
            </div>
            <div className="flex items-center justify-between gap-4">
                <p className="font-bold">WIELD</p>
                <p>Copyright © 2024 All rights reserved</p>
            </div>
        </div>
    );
}
