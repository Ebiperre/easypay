import React from 'react';
import { Hand, Hover } from '.';

const Hero = () => {
  return (
    <div className="flex items-center sm:flex-row flex-col bg-blueBg">
      {/* Left */}
      <div className="flex-1 sm:px-28 px-10 justify-center gap-7 flex flex-col">
        <h1 className="sm:text-6xl text-4xl font-bold">
          Everyday Bill Payment Made{' '}
          <span className="text-[#2A3382]">Easy</span>
        </h1>
        <span className="text-sm sm:text-xl">
          Schedule and make bill payments at the appropraite time
          <br /> with easypay{' '}
        </span>
        <div className="">
        <button className="sm:hidden block p-3 px-6 pt-2 w-max text-white bg-[#2A3382] rounded-xl baseline ">
          Download App
        </button>
        <button className="md:block p-3 px-6 pt-2 w-max text-white bg-[#2A3382] rounded-xl baseline ">
          Download App
        </button>
        </div>
        {/* left footer */}
        <div className="flex flex-row mt-20 gap-9 ">
          <span className="text-2xl hidden sm:block">
            <p className="font-semibold">12,000+ </p> Users
          </span>
          <span className="hidden sm:block text-2xl">
            <p className="font-semibold">100+ </p> Billers
          </span>
        </div>
      </div>

      {/* right */}
      <div className=" flex-1 mt-11 ">
        <img src={Hand} alt="" className="relative"/>
        <img src={Hover} alt="" className=" absolute top-[300px] opacity-0 hover:opacity-100" />
      </div>
    </div>
  );
};

export default Hero;
