'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDateTime = () => {
        const options: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        };
        return currentTime.toLocaleString('en-US', options);
    };

    return (
        <header className="h-[8vh] min-h-[60px] flex justify-between items-center px-[clamp(0.7rem,1.3vw,2rem)] bg-[#1A1A1A] w-full">
            <div className="flex-1 flex justify-start items-center">
                <div className="flex items-center">
                    <Image src="/logo.svg" alt="College Logo" width={50} height={50} className="w-[clamp(24px,1.7vw,40px)] h-auto" />
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <span className="text-[clamp(0.55rem,0.9vw,1.3rem)] font-medium text-white whitespace-nowrap">{formatDateTime()}</span>
            </div>
            <div className="flex-1 flex justify-end items-center">
                <span className="text-[clamp(0.5rem,0.7vw,1.2rem)] font-medium text-white whitespace-nowrap">20°C Sunny</span>
            </div>
        </header>
    );
}
