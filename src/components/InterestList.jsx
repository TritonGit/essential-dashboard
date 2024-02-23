import React from 'react';
import Rectangle2 from '../assets/Rectangle2.png';
import List2 from './List2';

//Imported List2 section from the List2.jsx as it is repeating again and again inside the (div box)

function InterestsList() {
  return (
    <div className='bg-white'>
    <div className='py-2 ml-32 mt-10 w-[1280px] h-auto bg-gray-50 rounded-lg '>
      <List2/>
      <List2/>
      <List2/>
      <List2/>
      <List2/>
    </div>
    <div className=' text-center'>for Ending this List2 Auto height </div>
  </div>
  );
}

export default InterestsList;
