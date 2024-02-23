import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

function ManualBody() {
  return (
    <div className='w-full h-auto mt-2'>
      <div className='ml-[110px] py-2 w-[85%] h-[500px] bg-gray-50 mt-4 rounded-lg relative'>
        <form className=''>
          <h3 className='mt-4 ml-16 font-medium'>Write the Description</h3> 
          <input type ='text'className='mt-3 ml-[70px] w-[89%] h-[200px] rounded-lg pl-4 pb-[150px] bg-gray-50 border border-gray-300'
           placeholder='Type here...' />
          
          {/* Submit Button */}
          <button 
            type='submit'
            className='absolute bottom-4 right-4 px-6 py-2 bg-black text-white rounded-md hover:bg-blue-600'
          >
            Submit
          </button>
        </form>

        <h3 className='mt-8 font-normal ml-16'>Choose a category</h3>
        <div className='w-full h-auto '>
          <button className='flex border border-gray-300 ml-20 mt-2 px-8 rounded-md'>
            Career <RiArrowDropDownLine style={{ fontSize: '25px' }} />
          </button>
        </div>
      </div>
    </div>  
  );
}

export default ManualBody;
