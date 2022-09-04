import React from "react";
import close from "../images/close.png";
import { useNavigate } from "react-router-dom";
import "../vendor.css";

const Modal = ({ modal, setModal }) => {
  const navigate = useNavigate();
  return (
    <div className={`${modal ? "category" : "category hider"} overflow`}>
      <div className='bg-white shadow-md rounded-md p-12 w-full sm:w-4/6'>
        <img
          className='bg-[#7805A7] p-3 w-10 ml-auto rounded-md'
          src={close}
          alt=''
          onClick={() => {
            setModal(false);
          }}
        />
        <h1 className='text-center text-xl sm:text-5xl font-semibold my-3'>
          Vendor Account
        </h1>
        <p className='text-base text-center max-w-xs mx-auto'>
          Create an account to become a vendor on i-wish store
        </p>
        <form
          action=''
          className='sm:w-4/6 mx-auto flex flex-col items-center justify-center'
        >
          <label
            htmlFor='category'
            className='font-normal mt-4 block text-base text-gray-700 w-full'
          >
            Username
          </label>
          <input
            type='text'
            className='block bg-gray-100 p-4 rounded-md my-2 w-full font-sm'
            placeholder='input your username'
          />
          <label
            htmlFor='email'
            className='font-normal mt-4 block text-base text-gray-700 w-full'
          >
            Email
          </label>
          <input
            type='text'
            id='email'
            className='block bg-gray-100 p-4 rounded-md my-2 w-full font-sm'
            placeholder='input your email'
          />
          <label
            htmlFor='phone'
            className='font-normal mt-4 block text-base text-gray-700 w-full'
          >
            Phone Number
          </label>
          <input
            type='text'
            id='phone'
            className='block bg-gray-100 p-4 rounded-md my-2 w-full font-sm'
            placeholder='Your Phone number'
          />

          <button
            className='bg-[#7805A7] text-white rounded-md text-sm md:text-base py-4 px-6 sm:px-20 font-normal tracking-wider w-fit my-2'
            onClick={() => navigate("/validate")}
          >
            Create Account
          </button>

          <p className='text-gray-700'>
            Already have an account?{" "}
            <span className='text-purple-900 font-bold underline cursor-pointer'>
              {" "}
              Login
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Modal;
