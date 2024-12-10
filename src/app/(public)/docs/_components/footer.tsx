"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <div className="pt-16 pb-48">
            <div className="flex justify-between mb-4 items-center gap-4">
                <div>
                    <p className="mb-4">
                        Follow our Developer and WIELD to make sure
                        <br /> you don’t miss out on our latest updates and
                        <br />
                        announcements
                    </p>
                    <div className="flex gap-4">
                        <Link className="hover:animate-shake" href="https://x.com/wield">
                            <div className="w-[480px] bg-wield p-6">X $WIELD</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mb-12">
                <div className="w-full border-[0.5px] opacity-50 border-[#F1EEE5]"></div>
            </div>
            <div className="flex justify-between items-center gap-4">
                <p className="font-bold">WIELD</p>
                <p>Copyright © 2024 All rights reserved</p>
            </div>
        </div>
    );
}
