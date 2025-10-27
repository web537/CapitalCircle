'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to change header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/#events' },
    { label: 'Speakers', href: '/#speakers' },
    { label: 'About Us', href: '/#about-us' },
    { label: 'Partners', href: '/#partners' }
  ];

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#080B11] shadow-md' : 'bg-[#080B11]'
      }`}
    >
      {/* Wrapper with padding */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-[15px] sm:py-[22px] md:py-[30px]">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-[3px] sm:gap-[4px] md:gap-[6px] w-auto"
          >
            <Image
              src="/images/site-logo.webp"
              alt="site-logo"
              width={38}
              height={38}
              unoptimized
              className="w-[28px] h-[28px] sm:w-[38px] sm:h-[38px] md:w-[48px] md:h-[48px]"
            />
            <span className="text-[16px] sm:text-[12px] md:text-[16px] font-figtree font-extrabold leading-[8px] sm:leading-[12px] md:leading-[16px] text-left uppercase text-global-5">
              The Capital Circle
            </span>
          </Link>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="block lg:hidden p-3"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-[#17C64F] transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#17C64F] transition-all duration-300 mt-1 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#17C64F] transition-all duration-300 mt-1 ${
                  menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-between items-center w-auto">
            <nav className="flex gap-[32px] sm:gap-[48px] md:gap-[64px] justify-center items-center">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-[8px] sm:text-[12px] md:text-[16px] font-poppins font-normal leading-[12px] sm:leading-[18px] md:leading-[24px] uppercase text-global-5 hover:text-[#17c64f] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link href="/contact/" className="ml-[32px] sm:ml-[48px] md:ml-[64px]">
              <Button
                variant="primary"
                size="md"
                    className="px-[12px] py-[4px] sm:px-[18px] sm:py-[6px] md:px-[24px] md:py-[8px] text-[8px] sm:text-[12px] md:text-[16px] font-poppins font-semibold leading-[12px] sm:leading-[18px] md:leading-[24px] bg-button-2 text-button-1 rounded-[10px] sm:rounded-[15px] md:rounded-[30px]"
                    >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-[#080B11] z-50 border-t border-global-4">
          <div className="flex flex-col p-4 space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-poppins font-normal text-global-5 hover:text-button-2 transition-colors duration-200 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <Button
                variant="primary"
                size="sm"
                className="w-full mt-4 bg-button-2 text-button-1"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
