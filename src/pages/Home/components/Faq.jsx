import React from 'react';
import { Man } from '.';
const Faq = () => {
  return (
    <div className="flex items-center justify-center bg-blueBg px-12 my-16">
      <div className="flex sm:flex-row flex-col-reverse mt-12">
        {/* left */}
        <div>
          {/* title */}
          <div className="flex flex-col gap-12 mt-5 px-4 ml-12">
            <span className="text-5xl font-semibold">Do you still have questions?</span>
            <span className="pr-10">
              Check out our FAQ page to answer any of your questions around our
              products and services, and if you require further<br/> assistance or
              would like to reach us for general inquiries, please email
              customerservice@easypay.com
            </span>
          </div>
        </div>

        {/* right */}
        <div className="w-[429px] h-[372px]">
            <img src={Man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
