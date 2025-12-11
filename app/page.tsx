"use client";

import { useState, useEffect } from "react";
import { motion, Transition } from "framer-motion";
import Header from "./components/Header";
import AnnouncementCard from "./components/AnnouncementCard";

const announcements = [
  {
    id: 1,
    accentColor: "red" as const,
    title: "Final SST Pitch - Presentation Guidelines",
    date: "May 05, 2025",
    author: "Academic Office",
    content:
      "The Final SST Pitch event is scheduled for May 12th, 2025. All participating teams must submit their presentation slides by May 10th. Please ensure your presentations follow the guidelines shared in the attached document. The Judging panel will include industry experts from leading tech companies. I can't run the app to verify changes, but I've implemented the code modifications as requested. Please verify them.Agent Error, unknown agent message: Unknown error from LLM streamI can't verify the changes myself by running the dev server. I've implemented the responsive text size adjustments in app/components/AnnouncementCard.tsx, so please check if the text now scales correctly across different screen sizes ",
  },
  {
    id: 2,
    accentColor: "yellow" as const,
    title: "Guest Lecture on Quantum Computing",
    date: "May 08, 2025",
    author: "Physics Department",
    content:
      "Join us for an insightful guest lecture on the principles of quantum computing by Dr. Evelyn Reed. The event will be held in the main auditorium.",
  },
  {
    id: 3,
    accentColor: "green" as const,
    title: "Annual Sports Gala - Registrations Open",
    date: "May 10, 2025",
    author: "Student Council",
    content:
      "Registrations for the annual sports gala are now open. Sign up for various track and field events, team sports, and indoor games. Last date for registration is May 15th.",
  },
  {
    id: 4,
    accentColor: "blue" as const,
    title: "Library System Maintenance",
    date: "May 12, 2025",
    author: "IT Services",
    content:
      "The library's online portal will be unavailable on May 14th from 2:00 AM to 4:00 AM due to scheduled maintenance. We apologize for any inconvenience.",
  },
  {
    id: 5,
    accentColor: "green" as const,
    title: "Summer Internship Fair 2025",
    date: "May 15, 2025",
    author: "Career Office",
    content:
      "Explore internship opportunities with top companies at the Summer Internship Fair. Bring your resumes and dress for success. The fair will be held in the university gymnasium.",
  },
];

export default function Home() {
  const [cards, setCards] = useState(announcements);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const first = newCards.shift();
        if (first) {
          newCards.push(first);
        }
        return newCards;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const transition: Transition = { type: "spring", stiffness: 400, damping: 40 };

  return (
    <main className="min-h-screen bg-[#050511] flex flex-col p-12 overflow-hidden">
      <Header />

      <div className="flex-grow flex flex-col lg:grid lg:grid-cols-12 gap-8 h-full pb-4 z-10">
        <motion.div
          key={cards[0].id}
          layoutId={`card-container-${cards[0].id}`}
          transition={transition}
          className="lg:col-span-5 h-full"
        >
          <AnnouncementCard {...cards[0]} variant="featured" />
        </motion.div>

        <div className="lg:col-span-7 h-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.slice(1, 5).map((announcement) => (
            <motion.div
              key={announcement.id}
              layoutId={`card-container-${announcement.id}`}
              transition={transition}
            >
              <AnnouncementCard {...announcement} variant="standard" />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
