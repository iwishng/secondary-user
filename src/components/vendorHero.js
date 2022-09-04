import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import laptop from "../images/laptop.png";

const VendorHero = ({ setModal }) => {
  return (
    <div className='py-12 my-10'>
      <div className='grid md:grid-cols-2 gap-4 items-center justify-center'>
        <div className=''>
          <h1 className='text-4xl md:text-5xl font-extrabold text-center md:text-left my-5'>
            Best Platform to Get Your Products to
            <span className='text-purple-900'> Prospective buyers.</span>
          </h1>
          <div className='flex gap-4 my-5 items-center justify-center md:justify-start'>
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
        <img src={laptop} alt='' />
      </div>
    </div>
  );
};

export default VendorHero;
