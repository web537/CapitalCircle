'use client';
import Image from 'next/image';
import React from 'react';

const PartnersCollaborators = () => {
  const logos = [
    {
                  href: "https://globalaishow.com",
                  src: "/images/gais.webp",
                  alt: "gais",
                },
                {
                  href: "https://www.globalblockchainshow.com/",
                  src: "/images/gbs.webp",
                  alt: "gbs",
                },
                {
                  href: "https://www.coriniumintelligence.com/",
                  src: "/images/Corinium.webp",
                  alt: "Corinium",
                },
                {
                  href: "https://re-work.co/",
                  src: "/images/Rework.webp",
                  alt: "Rework",
                },
                {
                  href: "/",
                  src: "/images/southeast-asia.webp",
                  alt: "Southeast Asia",
                },
                
  ];

  return (
    <section
      id="partners"
      className="w-full bg-[linear-gradient(318deg,#00000000_60%,#1d3819_100%)] py-[40px] sm:py-[60px] md:py-[80px] px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-[20px] sm:gap-[30px] md:gap-[40px] px-3">
        {/* Main Heading */}
        <h2 className="text-[18px] sm:text-[27px] md:text-[36px] font-poppins font-medium leading-[1.3] text-center bg-[linear-gradient(1deg,#17c64f_0%,#10b981_50%,#005529_100%)] bg-clip-text text-transparent">
          Media Partners
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 w-full">
          {logos.map((logo, idx) => (
            <a
              key={idx}
              href={logo.href || logo.link} // ✅ Supports both "href" and "link"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block w-full h-[90px] sm:h-[150px] md:h-[100px] bg-white rounded-[10px] overflow-hidden flex items-center justify-center shadow-md p-4"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                unoptimized
                className="w-[180px] h-[60px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCollaborators;
