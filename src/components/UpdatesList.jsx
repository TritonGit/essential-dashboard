import React from 'react';
import Rectangle1 from '../assets/Rectangle.png';
import List from './List';

//Imported List section from the List.jsx as it is repeating again and again inside the (div box)

function UpdatesList() {
  return (
    <div className='bg-white'>
    <div className='py-2 ml-32 mt-10 w-[1280px] h-auto bg-gray-50 rounded-lg '>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
    <div className=' text-center'>for Ending this list Auto height </div>
  </div>
  );
}

export default UpdatesList;
