'use client';
import React, { useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const ContactPage: React.FC = () => {
  const handlePartnerApply = () => {
    console.log('Apply to partner clicked');
  };

  // Embed HubSpot form on mount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.onload = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: '43968755',
          formId: '856063f2-f198-47ef-8ff8-835741e9c7b6',
          region: 'na1',
          target: '#hubspot-form'
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-global-1 flex flex-col justify-start items-center">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="w-full flex flex-col justify-start items-center">
        {/* Hero Section with form */}
        <section className="w-full bg-global-2">
          <div className="w-full max-w-[1550px] mx-auto">
            <div className="flex flex-col justify-center items-center h-auto py-[50px] mx-[10px]">
              <h1 className="text-[28px] sm:text-[42px] md:text-[57px] font-poppins font-semibold leading-[43px] sm:leading-[65px] md:leading-[87px] text-center bg-gradient-to-r from-[#17c64f] via-[#10b981] to-[#005529] bg-clip-text text-transparent">
                Join the Circle
              </h1>

              {/* HubSpot Form Target Div */}
              <div id="hubspot-form" className="mt-6 w-full max-w-[1100px] px-[15px] py-[20px] bg-white rounded-[20px] mx-[10px]"></div>
            </div>
          </div>
        </section>

        {/* Join the Circle Section */}
        <section className="w-full bg-global-1">
          <div className="w-full max-w-[1560px] mx-auto px-[28px] sm:px-[42px] md:px-[56px] py-[40px] sm:py-[60px] md:py-[80px]">
            <div className="flex justify-center items-start">
              <div className="flex flex-col justify-start items-center px-[18px] sm:px-[27px] md:px-[36px] mb-[5px] sm:mb-[7px] md:mb-[10px]">
                <h2 className="text-[20px] sm:text-[30px] md:text-[40px] font-poppins leading-[30px] sm:leading-[45px] md:leading-[60px] text-center mb-4">
                  <span className="font-bold bg-gradient-to-r from-[#17c64f] via-[#10b981] to-[#005529] bg-clip-text text-transparent">
                    Join the Circle{' '}
                  </span>
                 </h2>

                <p className="text-[14px] sm:text-[21px] md:text-[28px] font-poppins font-normal leading-[21px] sm:leading-[31px] md:leading-[42px] text-center text-global-5 mb-[6px] sm:mb-[9px] md:mb-[12px]">
                  Stay in the loop on our latest events & updates.
                </p>
                <a href='https://lu.ma/thecapitalcircle_?k=c'>
                <button
                  onClick={handlePartnerApply}
                  className="px-[17px] py-[9px] sm:px-[25px] sm:py-[13px] md:px-[34px] md:py-[18px] text-[9px] sm:text-[13px] md:text-[18px] font-poppins font-semibold leading-[13px] sm:leading-[20px] md:leading-[27px] text-button-1 bg-button-2 rounded-[17px] sm:rounded-[25px] md:rounded-[34px] mt-[6px] sm:mt-[9px] md:mt-[12px]"
                >
                  Subscribe to Luma
                </button>
                </a>
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
