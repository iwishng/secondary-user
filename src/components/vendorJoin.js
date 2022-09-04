import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const VendorJoin = ({ setModal }) => {
  return (
    <div className='rounded-xl shadow-xl bg-white border-2 border-gray-50 p-6 py-20 sm:px-20 flex flex-col justify-center items-center my-24'>
      <h1 className='font-bold text-3xl text-center max-w-lg'>
        Join hundreds of <span className='text-purple-900'>Online Vendors</span>{" "}
        and Showcase Your Awesome Products
      </h1>
      <div className='flex flex-col sm:flex-row gap-4 my-5 items-center justify-center md:justify-start'>
        <button
          className={`bg-[#7805A7] w-fit transition hover:bg-purple-900 hover:scale-105 px-6 text-sm rounded-md text-purple-50 font-semibold py-4 flex items-center justify-center gap-4`}
          onClick={() => setModal(true)}
        >
          <h1>Start Selling Now</h1>
          <i className='text-purple-900 bg-white p-1 w-5 h-5 flex flex-col items-center justify-center text-xl rounded-full'>
            <MdOutlineArrowForwardIos />
          </i>
        </button>
        <Link to='/contact'>
          <button
            className={`bg-white border-2 border-purple-900 w-fit transition hover:bg-purple-100 hover:scale-105 px-6 text-sm rounded-md text-purple-900 font-semibold py-3`}
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VendorJoin;
