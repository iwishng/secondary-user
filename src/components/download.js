import React from "react";
import google from "../images/google.png";
import app from "../images/app.png";
import star1 from "../images/star1.png";
import star3 from "../images/star3.png";

const Download = () => {
  return (
    <div className='bg-[#7805A7] relative p-12 py-36 overflow-hidden rounded-3xl flex flex-col justify-center items-center my-5'>
      <img
        className='absolute w-32 md:w-48 top-0 right-0 rounded-xl'
        src={star1}
        alt=''
      />
      <h2 className='text-[#FFCC00] font-bold text-2xl md:text-5xl text-center'>
        Download the App
      </h2>
      <p className='my-5 text-sm md:text-2xl text-purple-100 text-center'>
        Start creating unlimited wishlist by downloading the app now
      </p>
      <div className='grid grid-cols-2 items-center space-x-4'>
        <img src={google} className='w-fit h-12' alt='' />
        <img src={app} className='w-fit h-12' alt='' />
      </div>
      <img
        className='absolute w-40 sm:w-[50%] lg:w-[45%] -bottom-40 -left-64 rounded-xl'
        src={star3}
        alt=''
      />
    </div>
  );
};

export default Download;
