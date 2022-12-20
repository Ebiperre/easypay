import React from 'react';
import { Tv, Phone, Globe, Electricity } from '.';

const Services = () => {
  const rows = [
    {
      name: 'TV Bills',
      info: 'Pay for DSTV, Startimes, GOtv and other Operators at your convienence',
      img: Tv
    },
    {
      name: 'Electricity Bills',
      info: 'Pay for electricity with our wide range of billers ',
      img: Electricity
    },
    {
      name: 'Airtime',
      info: 'Buy airtime for yourself or friends from your service provider ',
      img: Phone
    },
    {
      name: 'Data',
      info: 'Subscribe to amazing data bundles',
      img: Globe
    },
  ];
  return (
    <div>
      <div className="ml-12">
        {/* title & info */}
        <div className="flex flex-col mt-24 gap-4">
          <span className="text-5xl font-bold">
            Enjoy Seamless Payment
            <br /> Services
          </span>
          <span className="text-xl">
            We have seamlessly, aggregated several bill payment channels such as
            Cable TV, Electricity,<br/>Airtime, Data and More to Come. We have simplified the entire
            process, making our app the
            <br /> most secure platform possible.
          </span>
        </div>

        {/* Card services */}
        <div className="grid grid-cols-1 sm:grid-cols-4">
            {rows.map((row) => (
        <div className=" px-4 py-4  w-max space-y-5 mt-6 items-center justify-center  rounded-xl bg-blueBg">
          <div className="grid-rows space-y-5">
            {/* image */}
            <div className="w-[102px] h-[102px]">
              <img src={row.img} alt="" />
            </div>
            {/* text */}
            <div className="flex w-[186px] flex-col">
              <span className="text-base font-semibold">{row.name}</span>
              <span>
                {row.info}
              </span>
            </div>
          </div>
        </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
