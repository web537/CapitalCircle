'use client';
import Image from 'next/image';

const speakers = [
  {
    name: "Aly Madhavji",
    designation: "Managing Partner",
    company: "Blockchain Founders Fund",
    imageSrc: "/images/speakers/Aly.webp",
    alt: "Aly",
  },
  {
    name: "Vineet Budki",
    designation: " Partner & CEO",
    company: " Sigma Capital Limited",
    imageSrc: "/images/speakers/Vineet.webp",
    alt: "Vineet",
  },
  {
    name: "Luchang Z",
    designation: "Founding Partner",
    company: "Arcanum Capital",
    imageSrc: "/images/speakers/Luchang.webp",
    alt: "Luchang",
  },
  {
    name: "Laura K. Inamedinova",
    designation: "Cheif Ecosystem Officer",
    company: "Gate ecosystem / GVC",
    imageSrc: "/images/speakers/Laura.jpg",
    alt: "Laura",
  },
   
];

const SpeakerSection = () => {
  return (
    <section
      id="speakers"
      className="w-full p-6 sm:p-8 md:p-10 lg:p-[38px] sm:p-4"
    >
      <div className="w-full max-w-[1540px]">
        {/* Section Title */}
       <h2 className="text-[18px] sm:text-[27px] mb-10 md:text-[36px] font-poppins font-medium leading-[1.3] text-center bg-[linear-gradient(1deg,#17c64f_0%,#10b981_50%,#005529_100%)] bg-clip-text text-transparent">
              Speakers
            </h2>
        {/* Speaker List Box */}
        <div className="w-full  max-w-[1200px] mx-auto">
          {/* Mobile gap-5 and larger screens gap-2 */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-2 place-items-center">
            {speakers.map((speaker, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Adjusted Image Container for smaller mobile sizes */}
                <div className="w-[120px] h-[120px] sm:w-[250px] sm:h-[250px] relative mb-4">
                  <Image
                    src={speaker.imageSrc}
                    alt={speaker.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="bg-[linear-gradient(1deg,#17c64f_0%,#10b981_50%,#005529_100%)] bg-clip-text text-transparent text-[13px] sm:text-[18px] font-semibold text-center mb-1">
                  {speaker.name}
                </h3>
                <p className="text-white text-[12px] sm:text-[14px] text-center mb-1">
                  {speaker.designation}
                </p>
                <p className="text-white text-[10px] sm:text-[12px] text-center">
                  {speaker.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
