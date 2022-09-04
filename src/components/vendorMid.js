import React from "react";
import feature from "../images/feature.png";
import manage from "../images/manage.png";
import monitor from "../images/monitor.png";
import integrate from "../images/integrate.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const VendorMid = ({ setModal }) => {
  return (
    <div className='my-10'>
      <h1 className='font-bold text-3xl md:text-5xl text-center p-12 max-w-xl mx-auto'>
        Get your Products Online with Ease
      </h1>

      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <div className='my-8 max-w-lg'>
            <img
              src={manage}
              className='w-12 p-3 rounded-xl bg-purple-100'
              alt='manage'
            />
            <h1 className='my-4 text-2xl font-bold'>Manage Products</h1>
            <p className='text-base'>
              Easily add and manage your peoducts with our easy to use sales
              dashboard
            </p>
          </div>
          <div className='my-8 max-w-lg'>
            <img
              src={monitor}
              className='w-12 p-3 rounded-xl bg-blue-100'
              alt='monitor'
            />
            <h1 className='my-4 text-2xl font-bold'>Monitor Orders</h1>
            <p className='text-base'>
              Keep track of your products in stock and get live status on your
              order
            </p>
          </div>
          <div className='my-8 max-w-lg'>
            <img
              src={integrate}
              className='w-12 p-3 rounded-xl bg-yellow-100'
              alt='monitor'
            />
            <h1 className='my-4 text-2xl font-bold'>
              Integrated Virtual Wallet
            </h1>
            <p className='text-base'>
              A platform integrated with virtual wallet feature to manage your
              finances, transfer between users and withdraw to your bank account
            </p>

            <button
              className={`bg-[#7805A7] w-fit transition hover:bg-purple-900 hover:scale-105 px-6 text-sm rounded-md text-purple-50 font-semibold py-4 flex items-center justify-center gap-4 my-10`}
              onClick={() => setModal(true)}
            >
              <h1>Start Selling Now</h1>
              <i className='text-purple-900 bg-white p-1 w-5 h-5 flex flex-col items-center justify-center text-xl rounded-full'>
                <MdOutlineArrowForwardIos />
              </i>
            </button>
          </div>
        </div>
        <img src={feature} alt='' />
      </div>
    </div>
  );
};

export default VendorMid;
