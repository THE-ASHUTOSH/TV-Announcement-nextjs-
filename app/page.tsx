'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import AnnouncementCard from './components/AnnouncementCard';

// Grid slot definitions to keep the layout stable while content moves
const GRID_SLOTS = [
  { id: 'slot-0', className: 'col-span-3 row-span-3' }, // Left Large
  { id: 'slot-1', className: 'col-span-2 row-span-1' }, // Top Right 1
  { id: 'slot-2', className: 'col-span-2 row-span-1' }, // Top Right 2
  { id: 'slot-3', className: 'col-span-2 row-span-1' }, // Middle Right 1
  { id: 'slot-4', className: 'col-span-2 row-span-1' }, // Middle Right 2
];

// Content Data
const ROTATING_ANNOUNCEMENTS = [
  {
    id: 'featured',
    icon: '🏫',
    title: 'Welcome Back Students!',
    description: 'We are excited to have everyone back on campus. Have a great semester.',
    category: 'College',
    backgroundColor: '#1565C0', // Darker Blue
    isEmergency: false,
  },
  {
    id: 'standard_1',
    icon: '🏢',
    title: 'Campus Job Fair',
    description: 'Looking for an internship? Join the job fair next week.',
    category: 'College',
    backgroundColor: '#E65100', // Darker Orange
    isEmergency: false,
  },
  {
    id: 'standard_2',
    icon: '🏈',
    title: 'Foamppionship',
    description: 'Our team is in finals! Come support them Friday!',
    category: 'Sports',
    backgroundColor: '#2E7D32', // Darker Green
    isEmergency: false,
  },
  {
    id: 'standard_3',
    icon: '🎓',
    title: 'Guest Lecture: AI Ethics',
    description: 'Dr. Jane Smith on the ethics of artificial intelligence.',
    category: 'Academic',
    backgroundColor: '#4527A0', // Darker Purple
    isEmergency: true,
  },
  {
    id: 'standard_4',
    icon: '🏈',
    title: 'Foamppionship',
    description: 'Our team is in talks at the stadium.',
    category: 'Food Services',
    backgroundColor: '#558B2F', // Darker Lime/Olive
    isEmergency: false,
  },
];

const STATIC_ANNOUNCEMENT = {
  id: 'cafeteria',
  icon: '🍽️',
  title: 'Cafeteria Menu',
  description: "Check out a week's delicious options!",
  category: 'Food Services',
  backgroundColor: '#FF6F00', // Darker Amber
  gridClass: 'col-span-4 row-span-1',
  isEmergency: false,
};

export default function Home() {
  const [items, setItems] = useState(ROTATING_ANNOUNCEMENTS);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((currentItems) => {
        const newItems = [...currentItems];
        const firstItem = newItems.shift();
        if (firstItem) {
          newItems.push(firstItem);
        }
        return newItems;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-[#1A1A1A]">
      <Header />
      <main className="flex-1 p-[clamp(0.5rem,1.5vh,2rem)] px-[clamp(1rem,2vw,3rem)] pb-[clamp(1rem,2vh,3rem)] overflow-hidden">
        <div className="grid grid-cols-7 grid-rows-3 gap-[clamp(12px,1.5vw,30px)] h-full w-full">
          {/* Render Rotating Items in their assigned slots */}
          {GRID_SLOTS.map((slot, index) => {
            const item = items[index];
            if (!item) return null;

            return (
              <motion.div
                key={item.id} // Key MUST be the item ID for Framer Motion to track it
                layout // Enables automatic layout animations
                transition={{
                  layout: { duration: 0.8, type: "spring", bounce: 0.2 }
                }}
                className={`relative w-full h-full ${slot.className}`}
              >
                <AnnouncementCard
                  id={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  backgroundColor={item.backgroundColor}
                  className="w-full h-full"
                  isEmergency={item.isEmergency}
                />
              </motion.div>
            );
          })}

          {/* Static Cafeteria Card */}
          <div className={STATIC_ANNOUNCEMENT.gridClass}>
            <AnnouncementCard
              id={STATIC_ANNOUNCEMENT.id}
              icon={STATIC_ANNOUNCEMENT.icon}
              title={STATIC_ANNOUNCEMENT.title}
              description={STATIC_ANNOUNCEMENT.description}
              category={STATIC_ANNOUNCEMENT.category}
              backgroundColor={STATIC_ANNOUNCEMENT.backgroundColor}
              className="w-full h-full"
              isEmergency={STATIC_ANNOUNCEMENT.isEmergency}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
