import React, { useState } from 'react';
import essential from '../assets/essential.png';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

function InterestsNav() {
  
  return (
    <div className=' w-full h-auto bg-white '>
      <div className='flex justify-between items-center'>
        <div>
          <img src={essential} className='w-30 ml-10 mt-5' alt='Essential Logo' />
        </div>

        <div className='  mr-10 relative mt-5'>
            <div className='relative right-0 mt-2 bg-white'>
              <button className=' flex px-4 py-2 text-black hover:bg-gray-100 w-full text-left'>
                Interest[Manual] <RiArrowDropDownLine style={{ fontSize: '25px' }}/>
              </button>
            </div>
            
        </div>

      </div>
      <div>
        <h1 className=' text-2xl text-[#33333366] font-bold ml-10'>Interests Dashboard</h1>
      </div>
    </div>
  );
}

export default InterestsNav;
