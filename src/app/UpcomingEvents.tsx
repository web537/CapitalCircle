'use client';
import Image from 'next/image';
import Link from 'next/link';

const upcomingEvents = [
  {
    name: "singapore",
    src: "/images/The28SEPT_2025_Capital_Circle.png",
    width: 340,
    height: 240,
    link: "https://luma.com/p9905tv6",
  },
  {
    name: "The11th_dec2025_CapitalCircle",
    src: "/images/The11th_dec2025_CapitalCircle.png",
    width: 340,
    height: 240,
    link: "https://lu.ma/m9le2iq6",
  },
  {
    name: "CapitalCircle_Riyadh_Luma",
    src: "/images/CapitalCircle_Riyadh_Luma.png",
    width: 340,
    height: 240,
    link: "https://luma.com/p8cnllqc",
  },
  {
    name: "TheCapitalCircle_june",
    src: "/images/TheCapitalCircle_june.png",
    width: 340,
    height: 240,
    link: "https://luma.com/qz8dma2j",
  },
];

const UpcomingEvents = () => {
  return (
    <section
      id="upcoming-events"
      className="w-full px-4 py-12 flex flex-col items-center justify-center bg-gradient-to-br from-[#0a2c13] to-[#000000]"
    >
      {/* Title */}
      <h2 className="text-white text-[24px] sm:text-[28px] lg:text-[32px] font-semibold mb-8 text-center">
        Upcoming Events
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1200px] w-full px-4">
        {upcomingEvents.map((event, index) => (
          <Link
            key={index}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
           >
            <Image
              src={event.src}
              alt={event.name}
              width={event.width}
              height={event.height}
            />
          </Link>
        ))}
      </div>

       {/* Buttons Row */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="https://lu.ma/thecapitalcircle_?k=c"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-[#20c940] text-black font-semibold rounded-full hover:bg-[#1bb232] transition-colors text-center"
        >
          Register here
        </a>

        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-[#20c940] text-black font-semibold rounded-full hover:bg-[#1bb232] transition-colors text-center"
        >
          Apply to partner
        </a>
      </div>

    </section>
  );
};

export default UpcomingEvents;
