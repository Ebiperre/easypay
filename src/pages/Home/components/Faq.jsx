import React from 'react';
import { Man } from '.';
const Faq = () => {
  return (
    <div className="flex bg-blueBg mt-12">
      <div className="grid grid-cols-2 items-center justify-center">
        {/* left */}
        <div className="flex flex-col gap-12 mt-5 ">
          {/* title */}
          <div className="flex flex-col items-center justify-center ml-36 sm:ml-5">
            <span className="text-5xl font-semibold">Do you still have questions?</span>
            <span className=" text-xl mt-6 my-3">
              Check out our FAQ page to answer any of your questions around our
              products and services, and if you require further assistance or
              would like to reach us for general inquiries, please email
              customerservice@easypay.com
            </span>
          </div>
        </div>

        {/* right */}
        <div className="sm:block hidden">
            <img src={Man} alt="" className="w-3/4"/>
        </div>
      </div>
    </div>
  );
};

export default Faq;
