'use client';
import Image from 'next/image';

const galleryImages = [
  '/images/event-highlights/welcom.webp',
  '/images/event-highlights/new-era.webp',
  '/images/event-highlights/happy.webp',
  '/images/event-highlights/netwoking.webp',
  '/images/event-highlights/thought.webp',
  '/images/event-highlights/selfie.webp',
  '/images/event-highlights/discuss.webp',
  '/images/event-highlights/exchnage.webp',
  '/images/event-highlights/network.webp',
  '/images/event-highlights/crowd.webp',
  '/images/event-highlights/people.webp',
  '/images/event-highlights/all-speaker.webp',
];

export default function GallerySection() {
  return (
<section className="w-full bg-[linear-gradient(41deg,#0a0a0a_60%,#1d3819_100%)] p-6 sm:p-8 md:p-10 lg:p-[38px] sm:p-4"
    >      {/* Heading */}
      <h2 className="text-center text-[24px] items-center justify-center sm:text-[28px] lg:text-[32px] font-semibold mb-8 text-center text-center bg-[linear-gradient(1deg,#17c64f_0%,#10b981_50%,#005529_100%)] bg-clip-text text-transparent mt-10"> 
        Event Highlights
      </h2>

      {/* Gallery Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`Gallery ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 opacity-80 bg-gradient-to-br from-[#0a0a0a]/70 to-[#1d3819]/70 group-hover:opacity-0 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
