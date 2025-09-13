// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Header from '../../components/common/Header';
// import Footer from '../../components/common/Footer';
// import Button from '../../components/ui/Button';
// import EditText from '../../components/ui/EditText';
// interface ContactFormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   message: string;
// }
// const ContactPage: React.FC = () => {
//   const [formData, setFormData] = useState<ContactFormData>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const handleInputChange = (field: keyof ContactFormData, value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };
//   const handleSubmit = async () => {
//     setIsSubmitting(true);
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log('Form submitted:', formData);
//     setIsSubmitting(false);
//     // Reset form
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       message: ''
//     });
//   };
//   const handlePartnerApply = () => {
//     console.log('Apply to partner clicked');
//   };
//   return (
//     <div className="w-full bg-global-1 flex flex-col justify-start items-center">
//       {/* Header */}
//       <Header />
//       {/* Main Content */}
//       <div className="w-full flex flex-col justify-start items-center">
//         {/* Hero Section with Contact Form */}
//         <section className="w-full bg-global-2">
//           <div className="w-full max-w-[1350px] mx-auto relative">
//             <div className="relative w-full h-[387px] sm:h-[580px] md:h-[774px]">
//               {/* Background Image */}
//               {/* <Image
//                 src="/images/img_group_gray_900.png"
//                 alt="Background decoration"
//                 width={328}
//                 height={562}
//                 className="absolute right-0 top-[116px] sm:top-[174px] md:top-[232px] w-[164px] h-[281px] sm:w-[246px] sm:h-[421px] md:w-[328px] md:h-[262px] z-0"
//               /> */}
//               {/* Content Container */}
//               <div className="relative z-10 px-[28px] sm:px-[42px] md:px-[56px] py-[58px] sm:py-[87px] md:py-[117px]">
//                 <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8 lg:gap-0">
//                   {/* Get in Touch Title */}
//                   <div className="flex-1 flex justify-start items-center">
//                     <div className="py-[14px] sm:py-[21px] md:py-[28px]">
//                       <h1 className="text-[28px] sm:text-[42px] md:text-[57px] font-poppins font-semibold leading-[43px] sm:leading-[65px] md:leading-[87px] text-left bg-gradient-to-r from-[#17c64f] via-[#10b981] to-[#005529] bg-clip-text text-transparent mb-[2px] sm:mb-[3px] md:mb-[4px]">
//                         Get in Touch
//                       </h1>
//                     </div>
//                   </div>
//                   {/* Contact Form */}
//                   <div className="w-full lg:w-[40%] flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] justify-start items-start self-center bg-global-4 rounded-[11px] sm:rounded-[16px] md:rounded-[22px] px-[31px] sm:px-[46px] md:px-[62px] py-[18px] sm:py-[27px] md:py-[36px] shadow-[0px_2px_23px_#888888ff] sm:shadow-[0px_3px_35px_#888888ff] md:shadow-[0px_4px_47px_#888888ff] border border-[#ffffff19]">
//                     {/* Form Title */}
//                     <h2 className="text-[9px] sm:text-[14px] md:text-[19px] font-poppins font-medium leading-[14px] sm:leading-[21px] md:leading-[29px] text-left text-global-5">
//                       Contact Us
//                     </h2>
//                     {/* Form Fields */}
                    
//                     {/* Submit Button */}
//                     <Button
//                       onClick={handleSubmit}
//                       loading={isSubmitting}
//                       className="px-[12px] py-[3px] sm:px-[18px] sm:py-[4px] md:px-[24px] md:py-[6px] text-[6px] sm:text-[9px] md:text-[12px] font-poppins font-medium leading-[10px] sm:leading-[15px] md:leading-[20px] text-button-1 bg-button-2 rounded-[9px] sm:rounded-[13px] md:rounded-[18px] mb-[6px] sm:mb-[9px] md:mb-[12px]"
//                     >
//                       Submit
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Join the Circle Section */}
//         <section className="w-full bg-global-1">
//           <div className="w-full max-w-[1560px] mx-auto px-[28px] sm:px-[42px] md:px-[56px] py-[40px] sm:py-[60px] md:py-[80px]">
//             <div className="flex justify-center items-start">
//               <div className="flex flex-col justify-start items-center px-[18px] sm:px-[27px] md:px-[36px] mb-[5px] sm:mb-[7px] md:mb-[10px]">
//                 {/* Main Heading */}
//                 <h2 className="text-[20px] sm:text-[30px] md:text-[40px] font-poppins leading-[30px] sm:leading-[45px] md:leading-[60px] text-center mb-4">
//                   <span className="font-bold bg-gradient-to-r from-[#17c64f] via-[#10b981] to-[#005529] bg-clip-text text-transparent">
//                     Join the Circle{' '}
//                   </span>
//                   <span className="font-medium text-global-5">
//                     Subscribe to{' '}
//                   </span>
//                   <span className="font-medium text-global-5 underline">
//                     Luma
//                   </span>
//                 </h2>
//                 {/* Subtitle */}
//                 <p className="text-[14px] sm:text-[21px] md:text-[28px] font-poppins font-normal leading-[21px] sm:leading-[31px] md:leading-[42px] text-center text-global-5 mb-[6px] sm:mb-[9px] md:mb-[12px]">
//                   Get in touch with us and let's BUIDL together Email
//                 </p>
//                 {/* Apply Button */}
//                 <Button
//                   onClick={handlePartnerApply}
//                   className="px-[17px] py-[9px] sm:px-[25px] sm:py-[13px] md:px-[34px] md:py-[18px] text-[9px] sm:text-[13px] md:text-[18px] font-poppins font-semibold leading-[13px] sm:leading-[20px] md:leading-[27px] text-button-1 bg-button-2 rounded-[17px] sm:rounded-[25px] md:rounded-[34px] mt-[6px] sm:mt-[9px] md:mt-[12px]"
//                 >
//                   Apply to partner
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };
// export default ContactPage;

///////////////////////////////////////////////////////////////////


'use client';
import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const ContactPage: React.FC = () => {
  const handlePartnerApply = () => {
    console.log('Apply to partner clicked');
  };

  return (
    <div className="w-full bg-global-1 flex flex-col justify-start items-center">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="w-full flex flex-col justify-start items-center">
        {/* Hero Section without form */}
        <section className="w-full bg-global-2">
          <div className="w-full max-w-[1350px] mx-auto">
            <div className="flex justify-center items-center h-[100px] sm:h-[100px] md:h-[100px]">
              <h1 className="text-[28px] sm:text-[42px] md:text-[57px] font-poppins font-semibold leading-[43px] sm:leading-[65px] md:leading-[87px] text-center bg-gradient-to-r from-[#17c64f] via-[#10b981] to-[#005529] bg-clip-text text-transparent">
                Get in Touch
              </h1>
            </div>
          </div>
        </section>

        {/* Join the Circle Section */}
        <section className="w-full bg-global-1">
          <div className="w-full max-w-[1560px] mx-auto px-[28px] sm:px-[42px] md:px-[56px] py-[40px] sm:py-[60px] md:py-[80px]">
            <div className="flex justify-center items-start">
              <div className="flex flex-col justify-start items-center px-[18px] sm:px-[27px] md:px-[36px] mb-[5px] sm:mb-[7px] md:mb-[10px]">
                {/* Main Heading */}
                <h2 className="text-[20px] sm:text-[30px] md:text-[40px] font-poppins leading-[30px] sm:leading-[45px] md:leading-[60px] text-center mb-4">
                  <span className="font-bold bg-gradient-to-r from-[#17c64f] via-[#10b981] to-[#005529] bg-clip-text text-transparent">
                    Join the Circle{' '}
                  </span>
                  <span className="font-medium text-global-5">
                    Subscribe to{' '}
                  </span>
                  <span className="font-medium text-global-5 underline">
                    Luma
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="text-[14px] sm:text-[21px] md:text-[28px] font-poppins font-normal leading-[21px] sm:leading-[31px] md:leading-[42px] text-center text-global-5 mb-[6px] sm:mb-[9px] md:mb-[12px]">
                  Get in touch with us and let's BUIDL together Email
                </p>

                {/* Apply Button */}
                <button
                  onClick={handlePartnerApply}
                  className="px-[17px] py-[9px] sm:px-[25px] sm:py-[13px] md:px-[34px] md:py-[18px] text-[9px] sm:text-[13px] md:text-[18px] font-poppins font-semibold leading-[13px] sm:leading-[20px] md:leading-[27px] text-button-1 bg-button-2 rounded-[17px] sm:rounded-[25px] md:rounded-[34px] mt-[6px] sm:mt-[9px] md:mt-[12px]"
                >
                  Apply to partner
                </button>
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

export default ContactPage;
