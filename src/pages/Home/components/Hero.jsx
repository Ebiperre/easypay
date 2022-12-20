import React from 'react'
import { Hand } from '.'

const Hero = () => {
  return (
    <div className="flex items-center bg-blueBg">
      {/* Left */}
      <div className="flex-1 ml-12 justify-center gap-7 flex flex-col">
        <h1 className="text-6xl font-bold">Everyday Bill Payment Made <span className="text-[#2A3382]">Easy</span></h1>
        <span className="text-xl">Schedule and make bill payments at the appropraite time<br/> with easypay </span>
        <button className="md:block p-3 px-6 pt-2 w-max text-white bg-[#2A3382] rounded-xl baseline ">Download App</button>
      {/* left footer */}
      <div className="flex flex-row mt-20 gap-9">
        <span className="flex text-2xl"><p className="font-semibold">12,000+ </p> Users</span>
        <span className="flex text-2xl"><p className="font-semibold">100+ </p> Billers</span>
      </div>
      </div>


      {/* right */}
      <div className="flex-1 hidden sm:block">
        <img src={Hand} alt="" />
      </div>
    </div>
  )
}

export default Hero