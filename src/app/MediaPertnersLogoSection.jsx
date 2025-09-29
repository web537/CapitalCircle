'use client';
import Image from 'next/image';
import React from 'react';

const MediaPartnersLogoSection = () => {
  const logos = [
     {
      alt: "Cryptonewsz",
      src: "/images/Cryptonewsz.png",
      href: "https://www.cryptonewsz.com/",
    },
    {
      alt: "NameCoinNews",
      src: "/images/NameCoinNews-White.png",
      href: "https://www.namecoinnews.com/",
    },
    {
      alt: "Times-OF-Blockchain",
      src: "/images/TimesofBlockchainLogo.png",
      href: "https://www.timesofblockchain.com/",
    },
   {
      alt: "timesofai",
      src: "/images/Timesofai-logo_white.png",
      href: "https://www.timesofai.com/",
    },
    {
      alt: "Coinnewsspan",
      src: "/images/Coinnewsspan-White.png",
      href: "https://Coinnewsspan.com/",
    },
    {
      alt: "Cryptomoonpress",
      src: "/images/CryptomoonpressWhite.png",
      href: "https://cryptomoonpress.com/",
    },
    {
      alt: "CapitalBayLogo",
      src: "/images/CapitalbayNews.png",
      href: "https://www.capitalbay.news/",
    },
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
    {
      href: "https://www.3versetv.com/",
      src: "/images/3versetv.jpg",
      alt: "3versetv",
    },
    {
    alt: "zexprwire-logo",
    src: "/images/zexprwire-logo.webp",
    link: "https://zexprwire.com/",
  },
  {
    alt: "coin-edition",
    src: "/images/coin-edition.webp",
    link: "https://coinedition.com/",
  },
  {
    alt: "cryptoken-media-logo",
    src: "/images/cryptoken-media-logo.webp",
    link: "https://cryptoken.media",
  },
  {
    alt: "cryptobrowser",
    src: "/images/cryptobrowser.png",
    link: "https://cryptobrowser.io/",
  },
  {
      src: '/images/smartmoneymatch.jpg',
      name: 'smartmoneymatch',
      link: 'https://www.smartmoneymatch.com/',
    },
    {
      src: '/images/transport-stake-logo.webp',
      name: 'transport-stake-logo',
      link: 'https://www.transportstake.com/',
    },{
      src: '/images/publicity-marketplace.webp',
      name: 'publicity-marketplace',
      link: 'https://www.publicitymarketplace.com/',
    },{
      src: '/images/functionalsourcing.jpg',
      name: 'functionalsourcing',
      link: 'https://www.functionalsourcing.com/',
    },{
      src: '/images/matchsdg.png',
      name: 'match-sdg-logo',
      link: 'https://www.matchsdg.com/',
    },
    {
      src: '/images/messtori.png',
      name: 'messtori',
      link: 'https://messtori.com/blockchain/',
    },{
      src: '/images/CMO-Intern-logo.webp',
      name: 'CMO-Intern-logo',
      link: 'https://www.cmointern.com/',
    },{
      src: '/images/logofintech24h-logo.png',
      name: 'logofintech24h-logo',
      link: 'https://fintech24h.com/',
    },{
      src: '/images/AIPressRoom-logo.webp',
      name: 'AIPressRoom-logo',
      link: 'http://aipressroom.com',
    },
    {
      src: '/images/vitaminai-logo.webp',
      name: 'vitaminai-logo',
      link: 'https://vitaminai.online/',
    },
     {
      src: '/images/coinlytix-logo.webp',
      name: 'coinlytix-logo',
      link: 'hhttps://coinlytx.com/',
    },
    {
      src: '/images/btc-wire.webp',
      name: 'btc-wire',
      link: 'https://btcwire.io/',
    },
    {
      src: '/images/CMO-Intern-logo.webp',
      name: 'cmointern',
      link: 'https://www.cmointern.com/',
    },
    {
      src: '/images/Golden_sea.webp',
      name: 'Golden_sea',
      link: 'https://goldenseastudios.com/',
    },
    {
      src: '/images/education-stake-logo.png',
      name: 'education-stake-logo',
      link: 'https://www.educationstake.com/',
    },
    {
      src: '/images/finalcialservice-review.png',
      name: 'finalcialservice-review',
      link: 'hhttps://www.financialservicesreview.com/',
    },
    {
      src: '/images/TMP-LOGO.webp',
      name: 'themarketperiodical',
      link: 'https://themarketperiodical.com/',
    },
     {
      src: '/images/crypto-news.png',
      name: 'crypto-news',
      link: 'https://crypto.news/',
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
            className="block w-full h-[90px] bg-gradient-to-br from-[#0a2c13] to-[#000000] sm:h-[240px] md:h-[90px] rounded-[10px] overflow-hidden flex items-center justify-center shadow-md p-4"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={200}
              className="w-[200px] h-[80px] object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MediaPartnersLogoSection;
