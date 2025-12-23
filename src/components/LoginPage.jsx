import React, { useState } from 'react';
import { Link } from 'react-router';

const LoginPage = () => {
  const [isFocused, setFocused] = useState(false); 

  const handleInputFocus = () => {
    setFocused(true);
  };

  const handleInputBlur = () => {
    setFocused(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[375px] h-[700px] bg-[#F7F8F9] border-1 border-gray-200  rounded-sm p-6 relative">
        <div className='absolute top-6 right-0 left-0 px-6 py-4'>
          <div className='text-[#1D2226] font-semibold text-2xl'>Signin to your</div>
          <div className='text-[#1D2226] font-semibold text-2xl'>PopX account</div>
          <div className='text-gray-500 text-base mt-1'>Lorem ipsum dolor sit amet,</div>
          <div className='text-gray-500 text-base'>consectetur adipiscing elit,</div>
          <div> 
            <div className="relative mt-4">
              <label
                htmlFor="email"
                className="absolute -top-2 left-2 z-10 bg-white px-1 text-sm text-[#6C25FF] font-[500]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="block w-full px-2.5 pb-2.5 pt-3 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#6C25FF]"
                placeholder="Enter email address"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                readOnly 
              />
            </div>

            <div className="relative mt-4">
              <label
                htmlFor="password"
                className="absolute -top-2 left-2 z-10 bg-white px-1 text-sm text-[#6C25FF] font-[500]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full px-2.5 pb-2.5 pt-3 text-sm font-[400] text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#6C25FF]"
                placeholder="Enter password"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                readOnly 
              />
            </div>
            <Link to='/account'>
            <button
              className={`w-full rounded-lg cursor-pointer flex text-white items-center justify-center px-4 py-3 text-lg font-medium mt-6 transition-all duration-200 ease-in-out
                bg-[#CBCBCB] cursor-default
                ${isFocused ? 'animate-pulse bg-blue-300' : ''}
              `}
            >
              Login
            </button>
            </Link>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default LoginPage;