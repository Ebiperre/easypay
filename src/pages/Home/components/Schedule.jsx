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
    <div className="mt-24 bg-blueBg">
        <div className="flex items-center justify-center text-left">
            {/* left */}
            <div className="sm:ml-20 flex flex-col gap-7 sm:items-center justify-center sm:items-start">
                {/* title */}
                <div>
                    <span className="text-2xl sm:text-5xl font-semibold">Schedule Payments in <span className="text-[#2A3382]">3 Easy</span> steps</span>
                    
                </div>
                {items.map((items) => (
                <div className="flex sm:gap-4">
                    <span className="p-3 bg-grey rounded-full sm:w-8 sm:h-8 w-5 h-5 text-sm sm:text-xl items-center flex sm:justify-center ml-4 sm:ml-0">{items.id}</span>
                    <div>
                    <p className="sm:text-2xl text-base font-semibold">{items.title}</p>
                    <span className="sm:text-xl text-xs font-normal">{items.info}</span>
                    </div>
                </div>
                ))}
            <button className="sm:ml-10 md:block p-3 px-6 pt-2 w-max text-white bg-[#2A3382] rounded-xl baseline mb-20">Start Making Payments</button>
            </div>

            {/* right */}
            <div className="hidden sm:block grow">
                <img src={Blue} alt="" className="-z-10 w-1/4 absolute mt-[80px] right-[225px]"/>
                <img src={Guy} alt="" className="w-[60%] relative -top-[22px] left-[122px]"/>
            </div>
        </div>
    </div>
  )
}

export default Schedule