import React from 'react'

const HeaderMain = () => {
  return (
    <div className="border-b border-red-200 pe-8 py-6">
      <div className="container sm:flex justify-between items-center">
        {/*pb-4 for space*/}
        <div className="font-bold text-4xl text-center sm:p-0 text-blackish">Logo
          {/*<img src="logo.png" alt="Logo" width="70" height="70" />*/}
        </div>

        <div className="w-full sm:w-[1000px] md:w-w[70%] relative">
          <input 
           className="border-gray-200 border p-2 px-4 rounded-lg w-full" type="text"
           placeholder="Enter any product name..."
           />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain