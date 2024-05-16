import React from 'react'
import { BiUser } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const HeaderMain = () => {
  return (
    <div className="border-b border-red-200 pe-8 py-6">
      <div className="container sm:flex justify-between items-center">
        {/*pb-4 for space*/}
        <div className="font-bold text-4xl text-center sm:p-0 text-blackish">
          <img src="logo.png" alt="Logo" width="100" height="100" />
        </div>

        <div className="w-full sm:w-[1000px] md:w-w[70%] relative">
          <input 
           className="border-gray-200 border p-2 px-4 rounded-lg w-full" type="text"
           placeholder="Search Shoppingwithme.com"
           />
               <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text0-gray-400" size={20}/>

        </div>
        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser/>
          <div className="relative">
          <FiHeart/>
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[10px] 
          text-white grid place-items-center translate-x-1 -translate-y-1">
          0
          </div>
          </div>
          <div className="relative">
          <HiOutlineShoppingCart/>
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[10px] 
          text-white grid place-items-center translate-x-1 -translate-y-1">
          0
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain