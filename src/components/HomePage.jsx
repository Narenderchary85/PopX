import React from 'react'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="w-[375px] h-[700px] bg-[#F7F8F9] border-1 border-gray-200 rounded-sm p-6 relative">
      <div className='absolute bottom-7 right-0 left-0 px-6 py-4'>
        <div className='text-[#1D2226] font-semibold text-2xl'>Welcome to PopX</div>
        <div className='text-gray-500 text-base mt-1'>Lorem ipsum dolor sit amet,</div>
        <div className='text-gray-500 text-base'>consectetur adipiscing elit,</div>
        <div className='flex flex-col gap-3 mt-4'>
         <Link to='/signup'>
          <button className='w-full bg-[#6C25FF] cursor-pointer rounded-lg flex text-white items-center justify-center px-4 py-3 text-lg font-medium'>
              Create Account
            </button>
         </Link>
          <Link to='/login'>
            <button className='w-full bg-[#6C25FF4B] cursor-pointer rounded-lg flex text-black items-center justify-center px-4 py-3 text-lg font-medium'>
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomePage
