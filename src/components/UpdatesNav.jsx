import React, { useState } from 'react';
import essential from '../assets/essential.png';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

function UpdatesNav() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      // Clicking on the same option again, reset selection and close dropdown
      setSelectedOption(null);
      setDropdownOpen(false);
    } else {
      // Clicking on a different option, update selection and close dropdown
      setSelectedOption(option);
      setDropdownOpen(false);

      // Perform actions based on the selected option
      // For demonstration purposes, we'll log the selected option to the console
      console.log('Selected option:', option);
    }
  };

  return (
    <div className=' w-full h-auto bg-white '>
      <div className='flex justify-between items-center'>
        <div>
          <img src={essential} className='w-30 ml-10 mt-5' alt='Essential Logo' />
        </div>
        <div className='mr-10 relative mt-5'>
          <button
            className='flex items-center px-4 py-2 text-gray-700 font-medium hover:bg-gray-400 focus:outline-none'
            onClick={toggleDropdown}
          >
            {selectedOption || 'Updates'} {isDropdownOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
          </button>
          {isDropdownOpen && (
            <div className='absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-md'>
              <button
                onClick={() => handleOptionClick('Interest')}
                className='block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left'
              >
                {selectedOption === 'Interest' ? 'Updates' : 'Interest'}
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <h1 className=' text-2xl text-[#33333366] font-bold ml-10'>Updates Dashboard</h1>
      </div>
    </div>
  );
}

export default UpdatesNav;
