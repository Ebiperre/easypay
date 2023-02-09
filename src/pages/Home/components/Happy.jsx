import React from 'react';
import { Card1, Card2, Card3 } from '.';

const Happy = () => {
    const peoples = [
        {
            name: "Sophia Moore",
            info: "I use easypay for buying airtime and paying my power bills, Very reliable",
            img: Card3
        },
        {
            name: "Gbenga Dunyi",
            info: "I buy data and airtime from easypay, very seamless process",
            img: Card1
        },
        {
            name: "Wale Tobi",
            info: "Easy pay has made bill payment stressfree",
            img: Card2
        },
    ]
  return (
    <div className="mt-28 sm:px-8 px-0 flex items-center justify-center">
      <div className="">
        {/* title */}
        <div className="flex justify-center items-center">
          <span className="sm:text-5xl text-4xl text-center font-semibold">
            Happy Customers Stories
          </span>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 px-0 sm:px-2 mt-12">
            {peoples.map((people) =>
          <div className="bg-blueBg w-[394px] h-[399px] px-5 py-5 flex items-center justify-center rounded-2xl">
            {/* img */}
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src={people.img} alt="" className="rounded-full w-[149px] h-[150px]" />
              </div>
              {/* text */}
              <div className="flex flex-col text-center">
                <span className="text-2xl font-bold my-4">{people.name}</span>
                <span className="text-xl">
                 {people.info}
                </span>
              </div>
            </div>
          </div>
            )}
          
          
        </div>
      </div>
    </div>
  );
};

export default Happy;
