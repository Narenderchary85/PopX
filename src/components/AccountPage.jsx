import React from 'react';
import { FaCamera } from 'react-icons/fa';

const AccountPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[375px] h-[700px] bg-white rounded-sm border-gray-200 relative overflow-hidden">
        <div className='px-6 py-4 bg-white'>
          <div className='text-[#1D2226] font-semibold text-2xl'>Account Settings</div>
        </div>
        <div className='bg-gray-100 h-full px-6 py-4'> 
          <div className="flex items-center mt-2">
            <div className="relative">
              <img
                src="/Ellipse 114@2x.png" 
                alt="User Avatar"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-[#6C25FF] rounded-full p-1 flex items-center justify-center">
                <FaCamera className='text-white text-xs' /> 
              </div>
            </div>
            <div className="ml-4">
              <div className="text-[#1D2226] font-semibold text-lg">Marry Doe</div>
              <div className="text-gray-500 text-sm">Marry@Gmail.Com</div>
            </div>
          </div>
          <div className="mt-4 text-black text-sm leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </div>
        </div>
          <div className="border-b border-dashed border-[#CBCBCB] w-full mt-6 absolute top-58"></div>
          <div className="border-b border-dashed border-[#CBCBCB] w-full mt-6 absolute bottom-8"></div>
      </div>
    </div>
  );
};

export default AccountPage;