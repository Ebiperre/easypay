import React from 'react';

const Footer = () => {
  return (
    <footer className=' bg-indigo-800 text-white px-[5rem] pt-[5rem] pb-6'>
       <div className="flex items-baseline justify-between mb-20">
          <div className="">
             <h1 className='text-[40px]'>easypay</h1>
             <p className='text-4'>Schedule and make bill payments <br /> at the appropraite time with easypay</p>
          </div>

          <div className=''>
           <div className="flex items-center gap-[64px] text-xl font-semibold mb-4">
             <h1>Company</h1>
             <h1>Resources</h1>
           </div>
            <div className="grid grid-cols-2">
              <p className='p-1'>About Us</p>
              <p className='p-1'>Privacy Policy</p>
              <p className='p-1'>Help</p>
              <p className='p-1'>Terms and Condition</p>
              <p className='p-1'>Join Us</p>
              <p className='p-1'>Security</p>
              <p className='p-1'>FAQs</p>
            </div>
          </div>

          <div className="">
              <h1 className='text-xl font-semibold mb-4'>Contacts Us</h1>
              <div className="">
                <p>contact@easypay.com </p>
                <p className='p-1'>(234) 3677 5890</p>
                <p className='p-1'>64 Rashid Estate</p>
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
