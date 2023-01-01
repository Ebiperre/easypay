import React from 'react';
import { Logo } from './components';

const Navigation = () => {
  return (
    <nav className="relative container mx-auto py-6 sm:px-28 px-10 w-full">
        {/* <!-- Flex Container --> */}
        <div className="flex items-center justify-between">
            {/* <!-- Logo --> */}
            <div className="pt-2">
                <img src={Logo} className="w-1/2" alt=""/>
            </div>
            {/* <!-- Menu Items --> */}
            <div className="hidden md:flex gap-14">
                <a href="#" className="hover:text-[#2A3382] font-bold">Services</a>
                <a href="#" className="hover:text-[#2A3382] font-bold">Help</a>
                <a href="#" className="hover:text-[#2A3382] font-bold">Reviews</a>
            </div>
            {/* <!-- Button --> */}
            <a href="#" className="hidden md:block p-3 px-8 pt-2 text-white bg-[#2A3382] rounded-xl baseline flex items-center">Download App</a>
        </div>
    </nav>
  );
};

export default Navigation;
