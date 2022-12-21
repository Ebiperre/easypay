import React from 'react';
import { BlueLady, Playstore, Applestore } from '.';

const Download = () => {
  return (
    <div className="bg-[#2A3382] sm:-mt-6 mt-10">
      <div>
        {/* content */}
        <div className="flex flex-col items-center justify-center px-6 pt-10 gap-4">
          <span className="text-white text-center text-5xl font-semibold">
            Download the app and start your journey to
            <br /> stress-free payments now
          </span>
          <div className="flex gap-4 w-max">
            <span className="border-[2px] border-white flex items-center gap-3 h-[78px] px-5 mt-5 rounded-3xl w-max">
              <img src={Playstore} alt="" className="w-10 h-10" />
              <p className="text-white text-2xl font-medium">Google Play</p>
            </span>
            <span className="border-[2px] border-white flex items-center gap-3 h-[78px] px-5 mt-5 rounded-3xl w-max">
              <img src={Applestore} alt="" className="w-10 h-10" />
              <p className="text-white text-2xl font-medium">App Store</p>
            </span>
          </div>
        </div>

        {/* img */}
        <div className="sm:block hidden w-[832px] h-[771px] m-[auto]">
          <img src={BlueLady} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Download;
