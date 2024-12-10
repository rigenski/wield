"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="pt-16 pb-48">
      <div className="flex justify-between mb-4 items-center gap-4">
        <div>
          <h2 className="font-bold mb-4">Try it Now.</h2>
          <div className="hover:animate-shake">
            <Link href="/chatbot">
              <Image
                src="/button.png"
                alt="WIELD"
                width={480}
                height={480}
                className="w-auto h-[40px]"
              />
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-4">
            Follow our Developer and WIELD to make sure
            <br /> you don’t miss out on our latest updates and
            <br />
            announcements
          </p>
          <div className="flex gap-4">
            <Link className="hover:animate-shake" href="https://x.com/7ixier">
              <Image
                src="/x-dev.png"
                alt="Twitter"
                width={480}
                height={480}
                className="w-auto h-[40px]"
              />
            </Link>
            <Link className="hover:animate-shake" href="https://x.com/WIELD_AI">
              <Image
                src="/x-coin.png"
                alt="Twitter"
                width={480}
                height={480}
                className="w-auto h-[40px]"
              />
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
