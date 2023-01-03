import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-indigo-800 text-white px-[5rem] pt-[5rem] pb-6">
      <div className="flex sm:flex-row flex-col items-baseline justify-between mb-20">
        <div className="">
          <h1 className="text-4xl font-semibold mb-2">easypay</h1>
          <p className="text-4 opacity-75">
            Schedule and make bill payments <br /> at the appropraite time with
            easypay
          </p>
        </div>


        <div className="flex items-center mb-4">
          <div className="sm:grid sm:grid-cols-2 my-5 sm:my-0 gap-16">
            {/* Company */}
            <div className="">
              <p className="text-xl font-semibold">Company</p>
              <ul>
                <li>About Us</li>
                <li>Help</li>
                <li>Join Us</li>
                <li>FAQs</li>
              </ul>
            </div>

            {/* resources */}
            <div className=" mt-5 sm:mt-0">
              <p className="text-xl font-semibold">Resources</p>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-xl font-semibold mb-4">Contacts Us</h1>
          <div className="">
            <p>contact@easypay.com </p>
            <p className="p-1">(234) 3677 5890</p>
            <p className="p-1">64 Rashid Estate</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p>Copyright © 2022 easypay</p>
        <p>All Rights Reserved | Terms and Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
