import React, { useEffect } from "react";
import Shared from "../components/shared";
import { IoIosArrowBack } from "react-icons/io";
import laptop from "../images/laptop.png";
import google from "../images/google.png";
import app from "../images/app.png";
import { Link } from "react-router-dom";

const Success = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Shared>
      <div className='p-4'>
        <div className='max-w-4xl rounded-md shadow-md p-12 mx-auto flex justify-center flex-col items-center'>
          <Link
            to='/'
            className='flex w-full items-center justify-start text-base text-gray-700 cursor-pointer transition active:text-gray-200'
          >
            <i>
              <IoIosArrowBack />
            </i>
            <p className=''>Back to Homepage</p>
          </Link>
          <img src={laptop} className='w-[390px] mt-20' alt='laptop' />
          <h1 className='text-xl font-bold text-center my-2'>
            Account successfully created
          </h1>
          <p className='text-sm text-center max-w-sm'>
            Download the iWIsh app using your suitable phone version and login
            with your credentials to continue
          </p>
          <div className='grid grid-cols-2 items-center space-x-4 my-10'>
            <img src={google} className='w-fit h-12' alt='' />
            <img src={app} className='w-fit h-12' alt='' />
          </div>
        </div>
      </div>
    </Shared>
  );
};

export default Success;
