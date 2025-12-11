import React from 'react';

interface AnnouncementCardProps {
    title: string;
    date: string;
    author: string;
    content: string;
    variant?: 'featured' | 'standard';
    accentColor: 'red' | 'yellow' | 'blue' | 'green';
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
    title,
    date,
    author,
    content,
    variant = 'standard',
    accentColor,
}) => {
    // Map accent colors to tailwind classes
    // Using simple solid colors to ensure visibility first, slightly transparent text-shadow like effect
    const colorMap = {
        red: 'bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.6)]',
        yellow: 'bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.6)]',
        blue: 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.6)]',
        green: 'bg-green-600 shadow-[0_0_20px_rgba(22,163,74,0.6)]',
    };

    const borderColor = colorMap[accentColor];

    return (
        <div className={`relative bg-[#0E101B] overflow-hidden rounded-[2rem] border border-white/5 flex flex-row ${variant === 'featured' ? 'h-full' : 'h-full'}`}>

            {/* Left Accent Bar - Now a flex item so it CANNOT be hidden */}
            <div className={`w-3 h-full flex-shrink-0 ${borderColor}`} />

            {/* Content Container */}
            <div className={`flex flex-col h-full text-zinc-100 flex-grow ${variant === 'featured' ? 'p-16' : 'p-10'}`}>
                <h2 className={`${variant === 'featured' ? 'text-lg sm:text-xl lg:text-2xl' : 'text-base sm:text-lg lg:text-xl'} font-bold mb-3 text-white`}>
                    {title}
                </h2>

                <div className="flex items-center gap-5 text-[10px] sm:text-xs text-zinc-400 mb-5 font-mono tracking-wide uppercase opacity-80">
                    <div className="flex items-center gap-2">
                        {/* Clock Icon SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>Posted: {date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* User Icon SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                        </svg>
                        <span>By: {author}</span>
                    </div>
                </div>

                <p className={`text-zinc-300 leading-relaxed ${variant === 'featured' ? 'text-xs sm:text-sm' : 'text-[10px] sm:text-[11px]'} ${variant === 'featured' ? 'line-clamp-10' : 'line-clamp-4'} flex-grow opacity-90`}>
                    {content}
                </p>

                {variant === 'featured' && (
                    <div className="mt-8 flex items-end justify-end gap-4 opacity-80">
                        <span className="text-[10px] sm:text-xs text-zinc-400 mb-1">✓ Scan Now For More Details</span>
                        <div className="w-24 h-24 bg-white rounded-sm flex items-center justify-center">
                            {/* QR Code Placeholder */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AnnouncementCard;
