'use client';
import React from 'react';

import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full bg-global-1">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <div className="flex flex-col justify-start items-center w-full">
        {/* Hero Section */}
        <section 
          className="relative w-full bg-global-1"
          style={{
            backgroundImage: "url('/images/img_unijpg_copy_2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0"></div>
          {/* Hero Background Images */}
          <div className="relative w-full h-[403px] sm:h-[500px] md:h-[600px] lg:h-[506px]">
            <Image
              src="/images/img_rectangle_7.png"
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
            {/* Ellipse overlay */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center items-end px-[28px] sm:px-[42px] md:px-[56px]">
              <div className="relative w-full max-w-[681px] sm:max-w-[900px] md:max-w-[1350px] lg:max-w-[1362px] h-[218px] sm:h-[280px] md:h-[350px] lg:h-[436px] mt-[61px] sm:mt-[80px] md:mt-[100px] lg:mt-[122px]">
                {/* <Image
                  src="/images/img_ellipse_1.png"
                  alt="Hero ellipse"
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>
            {/* Hero Content */}
            <div
            className="absolute inset-0 flex flex-col gap-[32px] sm:gap-[48px] md:gap-[64px] justify-start items-center px-[28px] sm:px-[42px] md:px-[56px] pt-[29px] sm:pt-[44px] md:pt-[58px] bg-[linear-gradient(to-bottom,rgba(255,255,255,0)_0%,rgba(0,0,0,0.6)_100%)]"
          >
              <div className="flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] justify-start items-center w-full max-w-[400px] sm:max-w-[600px] md:max-w-[896px]">
                <h1 className="text-[30px] sm:text-[45px] md:text-[60px] font-poppins font-bold leading-[35px] sm:leading-[52px] md:leading-[69px] text-center text-global-5">
                  Support the best in Web3, Together!
                </h1>
                <div className="px-[4px] sm:px-[6px] md:px-[8px]">
                  <p className="text-[10px] sm:text-[15px] md:text-[18px] font-poppins font-normal leading-[14px] sm:leading-[24px] md:leading-[28px] text-center text-global-4">
                    The Capital Circle lights your path to the Web3 and blockchain future. We bring together top-tier venture capitalists and high‑potential startups, helping founders secure funding and strategic partners while giving investors access to a selected portfolio of groundbreaking projects
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-[9px] sm:gap-[13px] md:gap-[18px] justify-center items-center">
                <Link href='https://lu.ma/thecapitalcircle_?k=c'>
                <Button
                  variant="primary"
                  size="lg"
                  className="px-[16px] py-[8px] sm:px-[24px] sm:py-[12px] md:px-[32px] md:py-[16px] text-[9px] sm:text-[13px] md:text-[18px] font-poppins font-semibold leading-[14px] sm:leading-[20px] md:leading-[27px] text-center text-button-1 bg-button-2 rounded-[15px] sm:rounded-[22px] md:rounded-[30px]"
                >
                  Join the Circle
                </Button>
                </Link>
                <Link href='https://lu.ma/thecapitalcircle_?k=c'>
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-[14px] py-[8px] sm:px-[21px] sm:py-[12px] md:px-[28px] md:py-[16px] text-[9px] sm:text-[13px] md:text-[18px] font-poppins font-semibold leading-[14px] sm:leading-[20px] md:leading-[27px] text-center text-global-5 bg-button-1 border border-button-2 rounded-[15px] sm:rounded-[22px] md:rounded-[30px] shadow-[0px_2px_2px_#888888ff] sm:shadow-[0px_3px_3px_#888888ff] md:shadow-[0px_4px_4px_#888888ff]"
                >
                  Become a Member
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Events & Initiatives Section */}
        <section id="events" className="w-full bg-global-1 py-[18px] sm:py-[27px] md:py-[36px] px-[18px] sm:px-[27px] md:px-[36px]">
          <div className="w-full max-w-[1560px] mx-auto flex flex-col justify-start items-center">
            <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-poppins font-medium leading-[36px] sm:leading-[54px] md:leading-[72px] text-center bg-[linear-gradient(1deg,#17c64f_0%,#10b981_50%,#005529_100%)] bg-clip-text text-transparent">
              Events & Initiatives
            </h2>
            <div className="flex justify-center items-center mt-[12px] sm:mt-[18px] md:mt-[24px] px-[5px] sm:px-[7px] md:px-[10px]">
              <h3 className="text-[16px] sm:text-[24px] md:text-[32px] font-poppins font-medium leading-[24px] sm:leading-[36px] md:leading-[48px] text-left text-global-5">
                VC Node Nights 2024
              </h3>
            </div>
            <div className="w-full max-w-[1240px] mx-auto flex justify-center items-center mt-[20px] sm:mt-[30px] md:mt-[40px] px-[25px] sm:px-[35px] md:px-[46px] py-[25px] sm:py-[37px] md:py-[50px] mb-[11px] sm:mb-[16px] md:mb-[22px] bg-[linear-gradient(41deg,#0a0a0a_60%,#1d3819_100%)] rounded-[4px] sm:rounded-[6px] md:rounded-[8px]">

              <div className="w-full flex flex-col lg:flex-row gap-[24px] sm:gap-[36px] md:gap-[48px] justify-start items-center">
                <div className="w-full lg:w-[40%] flex flex-col justify-start items-center bg-[linear-gradient(41deg,#0a0a0a_0%,#1d3819_100%)] rounded-[4px] sm:rounded-[6px] md:rounded-[8px] p-[13px] sm:p-[19px] md:p-[26px]">
                  <Image
                    src="/images/img_rectangle_12.png"
                    alt="VC Node Nights 2024 event"
                    width={494}
                    height={498}
                    className="w-full h-auto rounded-[4px] sm:rounded-[6px] md:rounded-[8px]"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[16px] sm:gap-[24px] md:gap-[32px] justify-start items-center">
                  <div className="w-full">
                    <p className="text-[22px] sm:text-[33px] md:text-[44px] font-poppins leading-[26px] sm:leading-[39px] md:leading-[52px] text-left bg-[linear-gradient(135deg,#ffffff_0%,#ffffff7f_100%)] bg-clip-text text-transparent">
                      <span className="font-normal">We were excited to host</span>
                      <span className="font-light"> </span>
                      <span className="font-medium">VC Node Nights</span>
                      <span className="font-semibold"> </span>
                      <span className="font-normal">as an official part of</span>
                      <span className="font-light"> </span>
                      <span className="font-medium">Dubai Blockchain Week!</span>
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[13px] sm:text-[19px] md:text-[18px] font-poppins leading-[21px] sm:leading-[31px] md:leading-[24px] text-left text-global-3">
                      <span className="font-normal">In collaboration with </span>
                      <span className="font-medium text-[#eaeaea]">ETH Belgrade's "MEET THE VCs"</span>
                      <span className="font-semibold text-[#eaeaea]">,</span>
                      <span className="font-normal"> this dynamic event brought together some of the </span>
                      <span className="font-medium text-[#eaeaea]">brightest minds in blockchain and venture capital</span>
                      <span className="font-normal">, creating meaningful connections and sparking new opportunities in the ecosystem. As an added bonus, our attendees received </span>
                      <span className="font-medium text-[#eaeaea]">exclusive Festival Passes to the Global Blockchain Show,</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Upcoming Events Section */}
      <section id="ucoming-uvents" className="w-full bg-global-2 py-[30px] bg-[linear-gradient(318deg,#00000000_60%,#1d3819_100%)]">
        <div className="relative w-full">
          <div className="relative w-full max-w-[1560px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="flex flex-col justify-start items-center">
              <h2 className="text-[16px] sm:text-[24px] md:text-[32px] font-poppins font-medium leading-[21px] sm:leading-[31px] md:leading-[42px] text-center text-global-5">
                Upcoming Events
              </h2>

            {/* Image grid */}
            <div className="w-full flex flex-wrap justify-center items-center gap-[10px] mt-[30px]">
              {/* Each image div */}
              <div className="flex justify-center items-center bg-global-3 rounded-[8px] p-[20px] w-full sm:w-[48%] md:w-[30%] lg:w-[18%] h-[120px]">
                <Image
                  src="/images/img_bayer_jpg.png"
                  alt="Event partner logo"
                  width={216}
                  height={34}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-center items-center bg-global-3 rounded-[8px] p-[20px] w-full sm:w-[48%] md:w-[30%] lg:w-[18%] h-[120px]">
                <Image
                  src="/images/img_nouryion_jpg.png"
                  alt="Event partner logo"
                  width={194}
                  height={82}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-center items-center bg-global-3 rounded-[8px] p-[20px] w-full sm:w-[48%] md:w-[30%] lg:w-[18%] h-[120px]">
                <Image
                  src="/images/img_layer_1.svg"
                  alt="Event partner logo"
                  width={188}
                  height={74}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-center items-center bg-global-3 rounded-[8px] p-[20px] w-full sm:w-[48%] md:w-[30%] lg:w-[18%] h-[120px]">
                <Image
                  src="/images/img_frame_1000009759.svg"
                  alt="Event partner logo"
                  width={184}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-center items-center bg-global-3 rounded-[8px] p-[20px] w-full sm:w-[48%] md:w-[30%] lg:w-[18%] h-[120px]">
                <div className="flex gap-[10px] justify-center items-center w-full h-full">
                  <Image
                    src="/images/img_group_147.png"
                    alt="Event partner logo"
                    width={54}
                    height={54}
                    className="w-[50%] h-full object-contain"
                  />
                  <Image
                    src="/images/img_group_155.svg"
                    alt="Event partner logo"
                    width={120}
                    height={44}
                    className="w-[50%] h-full object-contain"
                  />
                </div>
              </div>
            </div>
              {/* Button */}
              <Link href='https://lu.ma/thecapitalcircle_?k=c'>

              <Button
                variant="primary"
                size="lg"
                className="px-[17px] py-[8px] sm:px-[25px] sm:py-[12px] md:px-[34px] md:py-[16px] text-[9px] sm:text-[13px] md:text-[18px] font-poppins font-semibold leading-[14px] sm:leading-[20px] md:leading-[27px] text-center text-button-1 bg-button-2 rounded-[15px] sm:rounded-[22px] md:rounded-[30px] mt-[30px]"
              >
                Register here
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </section>
        {/* About Us Section */}
      <section id="about-us" className="w-full bg-global-1 py-[25px] sm:py-[35px] md:py-[45px]">
        <div className="relative w-full">
          <div className="relative w-full max-w-[1350px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="w-full flex flex-col gap-[24px] sm:gap-[36px] md:gap-[48px] justify-center items-center">

              {/* Heading */}
              <h2 className="text-[18px] sm:text-[27px] md:text-[32px] font-poppins font-medium leading-[18px] sm:leading-[27px] md:leading-[36px] text-center bg-[linear-gradient(2deg,#17c64f_0%,#10b981_50%,#005529_100%)] bg-clip-text text-transparent">
                About Us
              </h2>

              {/* What makes Capital Circle unique */}
              <div className="w-full flex justify-start items-center">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-[16px] bg-[linear-gradient(41deg,#0A0A0A_60%,#1d3819_100%)] rounded-[4px] sm:rounded-[6px] md:rounded-[8px] p-[20px] sm:p-[30px] md:p-[40px]">
                  <div className="w-full lg:w-auto flex justify-center items-end bg-[linear-gradient(41deg,#0A0A0A_60%,#1d3819ad_100%)] rounded-[4px] sm:rounded-[6px] md:rounded-[8px] px-[20px] sm:px-[28px] md:px-[36px]">
                    <Image
                      src="/images/img_rectangle_12_496x568.png"
                      alt="About us image"
                      width={568}
                      height={496}
                      className="w-full h-auto rounded-[4px] sm:rounded-[6px] md:rounded-[8px] mt-[20px] sm:mt-[32px] md:mt-[44px]"
                    />
                  </div>
                  <div className="flex-1 lg:w-[44%] flex flex-col gap-[10px] sm:gap-[14px] md:gap-[20px] justify-start items-center mt-[16px] lg:mt-0">
                    <h3 className="text-[22px] sm:text-[33px] md:text-[44px] font-poppins font-medium leading-[26px] sm:leading-[39px] md:leading-[53px] text-left bg-[linear-gradient(135deg,#ffffff_0%,#ffffff7f_100%)] bg-clip-text text-transparent w-full">
                      What makes Capital Circle unique
                    </h3>
                    <p className="text-[13px] sm:text-[18px] md:text-[18px] font-poppins font-normal leading-[24px] sm:leading-[24px] md:leading-[24px] text-left text-global-2 w-full">
                      We bring both startups and investors together to ensure ambition alignment and impact. Our events are relationship-based, Digital introductions are just the start; our events are designed for authentic connections. We foster continuous support by helping craft narratives, frame outcomes, and maintain relations post-event.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission and Vision */}
              <div className="w-full flex flex-col lg:flex-row gap-[12px] sm:gap-[18px] md:gap-[24px] justify-start items-center">
                {/* Mission */}
                <div className="w-full lg:w-[600px] flex flex-col justify-start items-center bg-[linear-gradient(41deg,#0A0A0A_60%,#1d3819ad_100%)] rounded-[4px] sm:rounded-[6px] md:rounded-[8px] p-[14px] sm:p-[22px] md:p-[30px]">
                  <div className="w-[92%] flex flex-col gap-[24px] sm:gap-[36px] md:gap-[48px] justify-start items-center mb-[4px] sm:mb-[6px] md:mb-[8px]">
                    <div className="w-full flex flex-col gap-[6px] sm:gap-[8px] md:gap-[12px] justify-start items-start">
                      <h3 className="text-[22px] sm:text-[32px] md:text-[32px] font-poppins font-medium leading-[36px] sm:leading-[36px] md:leading-[37px] text-center bg-[linear-gradient(135deg,#ffffff_0%,#ffffff7f_100%)] bg-clip-text text-transparent">
                        Mission
                      </h3>
                      <p className="text-[13px] sm:text-[18px] md:text-[18px] font-poppins font-normal leading-[24px] sm:leading-[24px] md:leading-[24px] text-left text-global-2 w-full">
                        Our mission is to strategically connect high-potential Web3 founders with elite investors, and become a stage for meaningful partnerships and fueling decentralized innovation.
                      </p>
                    </div>
                    <Image
                      src="/images/img_image_302.png"
                      alt="Mission image"
                      width={612}
                      height={358}
                      className="w-full h-auto rounded-[4px] sm:rounded-[6px] md:rounded-[8px] mr-[2px] sm:mr-[4px] md:mr-[6px]"
                    />
                  </div>
                </div>
                {/* Vision */}
                <div className="w-full lg:w-[600px] flex flex-col justify-start items-center bg-[linear-gradient(41deg,#0A0A0A_60%,#1d3819ad_100%)] rounded-[4px] sm:rounded-[6px] md:rounded-[8px] p-[14px] sm:p-[22px] md:p-[30px]">
                  <div className="w-[94%] flex flex-col gap-[24px] sm:gap-[36px] md:gap-[48px] justify-start items-center mb-[4px] sm:mb-[6px] md:mb-[8px]">
                    <div className="w-full flex flex-col gap-[6px] sm:gap-[8px] md:gap-[12px] justify-start items-start">
                      <h3 className="text-[22px] sm:text-[32px] md:text-[32px] font-poppins font-medium leading-[36px] sm:leading-[36px] md:leading-[36px] text-center bg-[linear-gradient(135deg,#ffffff_0%,#ffffff7f_100%)] bg-clip-text text-transparent">
                        Vision
                      </h3>
                      <p className="text-[13px] sm:text-[18px] md:text-[18px] font-poppins font-normal leading-[24px] sm:leading-[24px] md:leading-[24px] text-left text-global-2 w-full">
                        To transform the way Web3 startups and investors connect. We go beyond one-off transactions! We believe in long-term collaboration and creating community-driven growth.
                      </p>
                    </div>
                    <Image
                      src="/images/img_image_302_358x638.png"
                      alt="Vision image"
                      width={638}
                      height={358}
                      className="w-full h-auto rounded-[4px] sm:rounded-[6px] md:rounded-[8px]"
                    />
                  </div>
                </div>
              </div>
              {/* Button */}
              <Link href='https://lu.ma/thecapitalcircle_?k=c'>
              <Button
                variant="primary"
                size="lg"
                className="px-[10px] py-[6px] sm:px-[16px] sm:py-[10px] md:px-[20px] md:py-[14px] text-[9px] sm:text-[13px] md:text-[18px] font-poppins font-semibold leading-[14px] sm:leading-[20px] md:leading-[27px] text-center text-button-1 bg-button-2 rounded-[12px] sm:rounded-[20px] md:rounded-[25px]"
              >
                Subscribe to our calendar
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
        {/* Community & Membership Section */}
          <section className="w-full bg-global-1 py-[30px] sm:py-[30px] md:py-[30px] px-[20px] sm:px-[42px] md:px-[56px]">
            <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-[30px] justify-center items-center">
              <h2 className="text-[18px] sm:text-[27px] md:text-[36px] font-poppins font-medium leading-[18px] sm:leading-[27px] md:leading-[36px] text-center bg-[linear-gradient(1deg,#17c64f_0%,#10b981_50%,#005529_100%)] bg-clip-text text-transparent w-full">
                Community & Membership
              </h2>

              {/* Cards wrapper */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px] md:gap-[42px] w-full">
                
                {/* Card 1 */}
                <div className="flex flex-col gap-[12px] justify-start items-start bg-[linear-gradient(225deg,#1c3718_-52%,#0A0A0A_33%)] rounded-[10px] p-[20px] sm:p-[24px] md:p-[32px] shadow-[0px_5px_8px_#00000019] h-full">
                  <Image
                    src="/images/img_vector.svg"
                    alt="Networking icon"
                    width={74}
                    height={48}
                    className="w-[37px] h-[24px] sm:w-[55px] sm:h-[36px] md:w-[74px] md:h-[48px]"
                  />
                  <h3 className="text-[14px] sm:text-[18px] md:text-[25px] font-poppins font-medium leading-[20px] sm:leading-[27px] md:leading-[37px] text-left text-global-5">
                    Networking with industry leaders
                  </h3>
                  <p className="text-[12px] sm:text-[16px] md:text-[18px] font-poppins font-normal leading-[20px] sm:leading-[24px] md:leading-[24px] text-left text-global-1">
                    Engage directly with Web3 VCs and Innovators
                  </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col gap-[12px] justify-start items-start bg-[linear-gradient(225deg,#1c3718_-52%,#0A0A0A_33%)] rounded-[10px] p-[20px] sm:p-[24px] md:p-[32px] shadow-[0px_5px_8px_#00000019] h-full">
                  <Image
                    src="/images/img_frame_2055248473.svg"
                    alt="Events icon"
                    width={52}
                    height={48}
                    className="w-[26px] h-[24px] sm:w-[39px] sm:h-[36px] md:w-[52px] md:h-[48px]"
                  />
                  <h3 className="text-[14px] sm:text-[18px] md:text-[25px] font-poppins font-medium leading-[20px] sm:leading-[27px] md:leading-[37px] text-left text-global-5">
                    Access to exclusive events
                  </h3>
                  <p className="text-[12px] sm:text-[16px] md:text-[18px] font-poppins font-normal leading-[20px] sm:leading-[24px] md:leading-[24px] text-left text-global-1">
                    Be a part of the best Web3 gatherings curated for maximum opportunity
                  </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col gap-[12px] justify-start items-start bg-[linear-gradient(225deg,#1c3718_-52%,#0A0A0A_33%)] rounded-[10px] p-[20px] sm:p-[24px] md:p-[32px] shadow-[0px_5px_8px_#00000019] h-full">
                  <Image
                    src="/images/img_frame_2055248472.svg"
                    alt="Collaboration icon"
                    width={48}
                    height={48}
                    className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] md:w-[48px] md:h-[48px]"
                  />
                  <h3 className="text-[14px] sm:text-[18px] md:text-[25px] font-poppins font-medium leading-[20px] sm:leading-[27px] md:leading-[37px] text-left text-global-5">
                    Collaboration opportunities
                  </h3>
                  <p className="text-[12px] sm:text-[16px] md:text-[18px] font-poppins font-normal leading-[20px] sm:leading-[24px] md:leading-[24px] text-left text-global-1">
                    Connect, partner, and grow within the Web3 community
                  </p>
                </div>
              </div>

              {/* Button */}
              <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="px-[16px] py-[8px] sm:px-[24px] sm:py-[12px] md:px-[32px] md:py-[16px] text-[9px] sm:text-[13px] md:text-[18px] font-poppins font-semibold leading-[14px] sm:leading-[20px] md:leading-[27px] text-center text-button-1 bg-button-2 rounded-[15px] sm:rounded-[22px] md:rounded-[30px] mt-[20px]"
              >
                Join the Circle
              </Button>
              </Link>
            </div>
          </section>
        {/* Partners & Collaborators Section */}
        <section id="partners" className="relative w-full bg-[linear-gradient(318deg,#00000000_60%,#1d3819_100%)]">
        <div className="w-full max-w-[1240px] mx-auto px-[20px] sm:px-[30px] md:px-[40px] py-[40px] sm:py-[60px] md:py-[80px] flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] items-center">
          
          {/* Main Heading */}
          <h2 className="text-[18px] sm:text-[27px] md:text-[36px] font-poppins font-medium leading-[1.3] text-center bg-[linear-gradient(1deg,#17c64f_0%,#10b981_50%,#005529_100%)] bg-clip-text text-transparent">
            Partners & Collaborators
          </h2>

          {/* Sub Heading */}
          <h3 className="text-[16px] sm:text-[24px] md:text-[32px] font-poppins font-medium leading-[1.4] text-global-5 self-start">
            Events & Conferences – GBS, GGS, SEABW
          </h3>

          {/* Images Grid */}
          <div className="grid grid-cols-3 gap-[10px] sm:gap-[20px] md:gap-[30px] w-full">
            
            <div className="w-full h-[200px] sm:h-[220px] md:h-[250px] rounded-[8px] overflow-hidden">
              <Image
                src="/images/img_frame_1321321350.png"
                alt="Partner event 1"
                width={474}
                height={396}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full h-[200px] sm:h-[220px] md:h-[250px] rounded-[8px] overflow-hidden">
              <Image
                src="/images/img_frame_2055248470.png"
                alt="Partner event 2"
                width={474}
                height={396}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="relative w-full h-[200px] sm:h-[220px] md:h-[250px] rounded-[8px] overflow-hidden flex justify-start items-end p-[12px] sm:p-[20px] md:p-[32px] bg-[linear-gradient(197deg,#00000000_0%,#000000bc_50%,#000000_100%)]"
              style={{
                backgroundImage: "url('/images/img_.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Image
                src="/images/img_ug6uujhnm587vszxxvi1oxzkl4.png"
                alt="Partner logo"
                width={232}
                height={52}
                className="w-[100px] sm:w-[160px] md:w-[232px] h-auto"
              />
            </div>

          </div>
        </div>
      </section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default HomePage;