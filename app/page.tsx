import Header from "./components/Header";
import AnnouncementCard from "./components/AnnouncementCard";

export default function Home() {
  const dummyText =
    "The Final SST Pitch event is scheduled for May 12th, 2025. All participating teams must submit their presentation slides by May 10th. Please ensure your presentations follow the guidelines shared in the attached document. The Judging panel will include industry experts from leading tech companies.";

  return (
    <main className="min-h-screen bg-[#050511] flex flex-col p-12 overflow-hidden">
      <Header />

      <div className="flex-grow grid grid-cols-12 gap-8 h-full pb-4 z-10">
        {/* Featured Column (Left) - Spans 5 columns */}
        <div className="col-span-5 h-full">
          <AnnouncementCard
            variant="featured"
            accentColor="red"
            title="Final SST Pitch - Presentation Guidelines"
            date="May 05, 2025"
            author="Academic Office"
            content={`${dummyText} The Final SST Pitch event is scheduled for May 12th, 2025. All participating teams must submit their presentation slides by May 10th. Please ensure your presentations follow the guidelines shared in the attached document. The Judging panel will include industry experts from leading tech companies.`}
          />
        </div>

        {/* Grid Column (Right) - Spans 7 columns */}
        <div className="col-span-7 h-full grid grid-cols-2 grid-rows-2 gap-8">
          <AnnouncementCard
            variant="standard"
            accentColor="yellow"
            title="Final SST Pitch - Presentation Guidelines"
            date="May 05, 2025"
            author="Academic Office"
            content={dummyText}
          />
          <AnnouncementCard
            variant="standard"
            accentColor="green"
            title="Final SST Pitch - Presentation Guidelines"
            date="May 05, 2025"
            author="Academic Office"
            content={dummyText}
          />
          <AnnouncementCard
            variant="standard"
            accentColor="blue"
            title="Final SST Pitch - Presentation Guidelines"
            date="May 05, 2025"
            author="Academic Office"
            content={dummyText}
          />
          <AnnouncementCard
            variant="standard"
            accentColor="green"
            title="Final SST Pitch - Presentation Guidelines"
            date="May 05, 2025"
            author="Academic Office"
            content={dummyText}
          />
        </div>
      </div>

    
    </main>
  );
}
