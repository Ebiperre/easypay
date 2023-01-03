import React from 'react'
import { Lady } from '.'

const Payments = () => {

  return (
    <div className="mt-24 ml-12 px-3">
        <div className="flex sm:flex-row flex-col-reverse items-center justify-center gap-8">
            {/* left */}
            <div className="w-[80%] sm:h-[500px] sm:mr-0 mr-20">
                <img src={Lady} alt="" />
            </div>

            {/* right */}
            <div className="flex flex-col gap-6 pr-8">
                <span className="sm:text-5xl text-2xl font-bold pr-8"> Make Bill Payments at the appropraite time</span>
                <span className="text-xl hidden sm:block">Easypay enables  payment  and scheduling of utility bills, we<br/>help you, Tv Cables, Airtime & Data on any device, anytime and anywhere. Our mission is to steer the world towards </span>
                <button className="md:block p-3 px-6 pt-2 w-max text-white bg-[#2A3382] rounded-xl baseline">Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Payments