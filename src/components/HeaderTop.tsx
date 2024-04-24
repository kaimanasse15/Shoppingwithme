import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-blue-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between">  
          {/*add item-center to modify */}

        <div className="text-gray-500 text-[12px]">
            <b>50% Off</b> Free Shipping over $100
          </div>
          <div className="hidden lg:flex gap-1a">
            <div className="header_top_icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top_icon_wrapper">
              <IoLogoInstagram />
            </div>
            <div className="header_top_icon_wrapper">
              <FaYoutube />
            </div>
            <div className="header_top_icon_wrapper">
              <FaTwitterSquare />
            </div>
            </div>

            <div className="flex gap-4">
              <select
                className="text-gray-500 text-[12px] w-[70px]"
                name="currency"
                id="currency"
              >
                <option value="USD $"> USD $</option>
                <option value="EUR $"> EUR $</option>
              </select>
              <select
                className="text-gray-500 text-[12px] w-[70px]"
                name="language"
                id="language"
              >
                <option value="English"> English</option>
                <option value="French"> French</option>
              </select>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeaderTop