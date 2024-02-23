import React, { useState } from 'react';
import essential from '../assets/essential.png';
import { RxCross2, RxSize } from "react-icons/rx";
import opjulogo from "../assets/opjulogo.png";

function InstituteNav() {
  
  return (
    <div className=' w-full h-auto bg-white '>
      <div className='flex justify-between items-center'>
        <div className='flex'>
          <img src={essential} className='w-30 ml-10 mt-5' alt='Essential Logo' />
          <div className=' w-auto h-auto ml-5 flex '>
          <button className='flex items-center gap-2 mt-6'><RxCross2 style={{ fontSize: '20px'}}/> <img className=' w-20 h-10' src={opjulogo}/> </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className=' text-2xl text-[#33333366] font-bold ml-10'>Manage Your Institute Page</h1>
      </div>
    </div>
  );
}

export default InstituteNav;
