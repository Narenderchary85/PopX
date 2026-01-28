import React from 'react';
import { Link } from 'react-router';

const SignUpPage = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[375px] h-[700px] bg-[#F7F8F9] border-1 border-gray-200  rounded-sm p-6 relative">
        <div className='absolute top-6 right-0 left-0 px-6 py-4'>
          <div className='text-[#1D2226] font-semibold text-2xl'>Create your</div>
          <div className='text-[#1D2226] font-semibold text-2xl'>PopX account</div>
          <div className="relative mt-6">
            <label
              htmlFor="fullName"
              className="absolute -top-2 left-2 z-10 bg-white px-1 text-sm text-[#6C25FF] font-[500]"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value="Marry Doe"
              className="block w-full px-2.5 pb-2.5 pt-3 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#6C25FF]"
              placeholder="Enter Your Fullname"
            />
          </div>
          <div className="relative mt-4">
            <label
              htmlFor="phoneNumber"
              className="absolute -top-2 left-2 z-10 bg-white px-1 text-sm text-[#6C25FF] font-[500]"
            >
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value="Marry Doe"
              className="block w-full px-2.5 pb-2.5 pt-3 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#6C25FF]"
              placeholder="Enter Your Phone number"
            />
          </div>
          <div className="relative mt-4">
            <label
              htmlFor="email"
              className="absolute -top-2 left-2 z-10 bg-white px-1 text-sm text-[#6C25FF] font-[500]"
            >
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value="Marry Doe"
              className="block w-full px-2.5 pb-2.5 pt-3 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#6C25FF]"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="relative mt-4">
            <label
              htmlFor="password"
              className="absolute -top-2 left-2 z-10 bg-white px-1 text-sm text-[#6C25FF] font-[500]"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              value="Marry Doe"
              className="block w-full px-2.5 pb-2.5 pt-3 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#6C25FF]"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="relative mt-4">
            <label
              htmlFor="companyName"
              className="absolute -top-2 left-2 z-10 bg-white px-1 text-sm text-[#6C25FF] font-[500]"
            >
              Company name
            </label>
            <input
              type="text"
              id="companyName"
              value="Marry Doe"
              className="block w-full px-2.5 pb-2.5 pt-3 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#6C25FF]"
              placeholder="Enter Your Campany name"
            />
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-700 font-[500]">Are you an Agency?</p>
            <div className="flex items-center mt-2 space-x-4">
              <div className="flex items-center">
                <input
                  id="agency-yes"
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={true}
                  className="h-4 w-4 text-[#642AF5] border-[#642AF5] focus:ring-[#642AF5]"
                />
                <label htmlFor="agency-yes" className="ml-2 text-sm text-gray-700">
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="agency-no"
                  type="radio"
                  name="agency"
                  value="no"
                  className="h-4 w-4 text-[#642AF5] border-[#642AF5] focus:ring-[#642AF5]"
                />
                <label htmlFor="agency-no" className="ml-2 text-sm text-gray-700">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <Link to='/account'>
        <button
            className='absolute bottom-6 right-4 w-[340px] bg-[#6C25FF] cursor-pointer rounded-lg flex text-white items-center justify-center px-4 py-3 text-lg font-medium mt-8'>
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;