import React from 'react'
import { Blue, Guy } from '.'

const Schedule = () => {
    const items = [
        {
            id: 1,
            title: "Fund your Easypay wallet",
            info: "Fund your wallet with outr flexible payment options like bank transfer and payment with credit card",
        },
        {
            id: 2,
            title: "Choose a Payment category",
            info: "Choose a payment category and your biller to make payments",
        },
        {
            id: 3,
            title: "Schedule and make payment",
            info: "Set the time, date and repeat option fot recurrent payments",
        },
    ]
  return (
    <div className="mt-24 ml-12 bg-blueBg">
        <div className="flex items-center justify-center">
            {/* left */}
            <div className="sm:ml-20 ml-0 flex flex-col gap-7">
                {/* title */}
                <div>
                    <span className="text-5xl font-semibold">Schedule Payments in <span className="text-[#2A3382]">3 Easy</span> steps</span>
                    
                </div>
                {items.map((items) => (
                <div className="flex gap-4 ">
                    <span className="p-2 bg-grey rounded-full w-8 h-8 items-center flex justify-center">{items.id}</span>
                    <div>
                    <p className="text-2xl font-semibold">{items.title}</p>
                    <span className="">{items.info}</span>
                    </div>
                </div>
                ))}
            <button className="md:block p-3 px-6 pt-2 w-max text-white bg-[#2A3382] rounded-xl baseline">Start Making Payments</button>
            </div>

            {/* right */}
            <div className="hidden sm:block grow">
                <img src={Blue} alt="" className="-z-10 w-1/5 absolute right-[315px]"/>
                <img src={Guy} alt="" className="w-1/2 relative -top-[22px] left-[122px]"/>
            </div>
        </div>
    </div>
  )
}

export default Schedule