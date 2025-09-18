'use client';
import Image from 'next/image';
import React from 'react';

const MediaPartnersLogoSection = () => {
  const logos = [
    {
      href: "hhttps://allconferencealert.net/",
      src: "/images/All-conference-alert.png",
      alt: "All-conference-alert",
    },
    {
      href: "https://www.alhudacibe.com/",
      src: "/images/AlHuda-Logo.png",
      alt: "AlHuda-Logo",
    },
    {
      href: "https://cryptojist.com/",
      src: "/images/CryptoJist-Black-Transparent.png",
      alt: "CryptoJist-Black-Transparent",
    },
    {
      href: "http://www.coingabbar.com/",
      src: "/images/Gabbar-logo-Dark-Background.png",
      alt: "Gabbar-logo-Dark-Background",
    },
    {
      href: "https://gtmlabs.xyz/",
      src: "/images/GTM-Labs-Logo-without-BG.png",
      alt: "GTM-Labs-Logo-without-BG",
    },
    
   ];

  return (
    <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-[20px] sm:gap-[30px] md:gap-[40px] px-3">
      
      {/* Main Heading */}
      <h2 className="text-[18px] sm:text-[27px] md:text-[36px] font-poppins font-medium leading-[1.3] text-center bg-[linear-gradient(1deg,#17c64f_0%,#10b981_50%,#005529_100%)] bg-clip-text text-transparent">
        Media Pertners
      </h2>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 w-full">
        {logos.map((logo, idx) => (
          <a
            key={idx}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-[90px] sm:h-[240px] md:h-[90px] rounded-[10px] overflow-hidden flex items-center justify-center shadow-md"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={200}
              className="w-[200px] h-[120px] object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MediaPartnersLogoSection;
