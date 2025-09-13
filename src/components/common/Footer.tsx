'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-global-1">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[28px] xl:px-[56px]">
        <div className="pt-[24px] sm:pt-[40px] md:pt-[56px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0 px-2 sm:px-4 md:px-6">
            
            {/* Logo and Tagline Section */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <Image
                  src="/images/img_group.png"
                  alt="The Capital Circle Logo"
                  width={48}
                  height={48}
                  className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] md:w-[48px] md:h-[48px]"
                />
                <span className="text-[12px] sm:text-[14px] md:text-[18px] font-figtree font-extrabold uppercase text-global-5">
                  The Capital Circle
                </span>
              </div>
              <p className="text-[10px] sm:text-[12px] md:text-[16px] font-poppins font-normal leading-snug text-footer-1 mb-4 sm:mb-6 md:mb-8 max-w-[300px]">
                Shaping the future of work through innovation and AI.
              </p>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full lg:w-auto">
              <h3 className="text-[12px] sm:text-[14px] md:text-[18px] font-poppins font-semibold text-global-5">
                Contact
              </h3>
              <div className="flex items-center gap-2 mb-4 sm:mb-6 md:mb-8">
                <Image
                  src="/images/img_margin.svg"
                  alt="Email icon"
                  width={24}
                  height={16}
                  className="w-[14px] h-[10px] sm:w-[18px] sm:h-[12px] md:w-[24px] md:h-[16px]"
                />
                <Link 
                  href="mailto:contact@thecapitalcircle.org"
                  className="text-[10px] sm:text-[12px] md:text-[16px] font-poppins font-normal text-footer-1 hover:text-global-5 transition-colors"
                >
                  contact@thecapitalcircle.org
                </Link>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full lg:w-auto">
              <h3 className="text-[12px] sm:text-[14px] md:text-[18px] font-poppins font-semibold text-global-5">
                Follow Us
              </h3>
              <div className="flex items-center gap-3 mb-4 sm:mb-6 md:mb-8">
                <Link href="https://www.facebook.com/blockverseseries/" className="hover:opacity-75 transition-opacity">
                  <Image
                    src="/images/img_text.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                </Link>
                <Link href="http://t.me/blockverseseries" className="hover:opacity-75 transition-opacity">
                  <Image
                    src="/images/telegram.svg"
                    alt="Telegram"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                </Link>
                <Link href="#" className="hover:opacity-75 transition-opacity">
                  <Image
                    src="/images/img_text_blue_gray_300_32x20.svg"
                    alt="Social media 3"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                </Link>
                <Link href="https://x.com/TheCapitalCircl" className="hover:opacity-75 transition-opacity">
                  <Image
                    src="/images/img_link_margin.svg"
                    alt="Twitter X"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
