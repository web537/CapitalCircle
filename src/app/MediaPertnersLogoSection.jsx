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
    {
      href: "https://coinpedia.org/",
      src: "/images/Coinpedia-Fintech-News-Blue-Logo.webp",
      alt: "coinpedia",
    },
    {
      href: "https://www.thecoinrepublic.com/",
      src: "/images/The-coin-Republic.webp",
      alt: "The-coin-Republic",
    },
    {
      href: "https://www.cryptopolitan.com/",
      src: "/images/Dark_CP_Logotype.png",
      alt: "Dark_CP_Logotype",
    },
    {
      href: "https://voiceofcrypto.online/",
      src: "/images/voice-of-crypto.webp",
      alt: "voice-of-crypto",
    },
    {
      href: "https://coinscapture.com/",
      src: "/images/coinscapture.webp",
      alt: "coinscapture",
    },
    {
      href: "https://web3wire.org/",
      src: "/images/Web3Wire-Logo.png",
      alt: "Web3Wire-Logo",
    },
    {
      href: "https://www.cioreview.com/",
      src: "/images/cio-review.webp",
      alt: "cio-review",
    },
    {
      href: "https://intlbm.com/",
      src: "/images/international-bussiness-magazine.webp",
      alt: "international-bussiness-magazine",
    },
    {
      href: "https://www.edarabia.com/",
      src: "/images/edarabia-logo.webp",
      alt: "edarabia",
    },
    {
      href: "https://www.aitimejournal.com/",
      src: "/images/aitimejournal-w.jpg",
      alt: "aitimejournal",
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
