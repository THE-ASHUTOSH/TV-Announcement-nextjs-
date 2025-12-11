'use client';

import React from 'react';

interface AnnouncementCardProps {
    id: string;
    icon: string;
    title: string;
    description: string;
    category: string;
    backgroundColor: string;
    className?: string; // allow passing grid classes
    isEmergency?: boolean;
}

export default function AnnouncementCard({
    icon,
    title,
    description,
    category,
    backgroundColor,
    className = '',
    isEmergency = false,
}: AnnouncementCardProps) {
    return (
        <div
            className={`
                relative flex flex-col p-[clamp(0.8rem,1.5vw,2rem)] rounded-[clamp(8px,1vw,16px)] overflow-hidden transition-transform duration-200 border-[length:clamp(3px,0.3vw,5px)]
                ${className}
                ${isEmergency ? 'z-10 border-[#F44336]' : 'border-transparent'}
            `}
            style={{
                backgroundColor: isEmergency ? '#333333' : backgroundColor,
            }}
        >
            {isEmergency && (
                <div className="absolute top-0 left-0 right-0 bg-[#B71C1C] px-[clamp(0.4rem,0.8vw,1rem)] py-[clamp(0.2rem,0.4vh,0.6rem)] flex items-center gap-[clamp(0.2rem,0.3vw,0.5rem)] rounded-t-[clamp(4px,0.5vw,10px)]">
                    <span className="text-[clamp(0.6rem,1vw,1.2rem)]">🚨</span>
                    <span className="font-bold text-white text-[clamp(0.5rem,0.8vw,1.1rem)]">Important</span>
                </div>
            )}

            <div className={`flex flex-col gap-[clamp(0.2rem,0.5vh,0.8rem)] h-full ${isEmergency ? 'mt-[clamp(1.2rem,2.5vh,2.5rem)]' : ''}`}>
                <div className="text-[clamp(1.2rem,2.5vw,4rem)] leading-none mb-[clamp(0.1rem,0.3vh,0.5rem)]">
                    {icon}
                </div>
                <h2 className="text-[clamp(0.8rem,1.4vw,2.2rem)] font-bold text-white leading-[1.2]">
                    {title}
                </h2>
                <p className="text-[clamp(0.6rem,1vw,1.5rem)] text-white/90 leading-[1.4] flex-1">
                    {description}
                </p>
                <span className="text-[clamp(0.5rem,0.7vw,1.1rem)] text-white/70 mt-auto self-start capitalize">
                    {category}
                </span>
            </div>
        </div>
    );
}
