import React, { useState } from 'react';

function InterestsSwitch() {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const toggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  return (
    <div className='w-full h-auto'>
      <div className='flex gap-3 text-[17px] ml-32 mt-8 font-medium'>
        <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
          All
        </button>
        <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
          Career
        </button>
        <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
          Exams
        </button>
        <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
          Web
        </button>

        {/* Show More button */}
        <button
          onClick={toggleMoreOptions}
          className={`border border-black text-black rounded-lg px-4 py-1 ${
            showMoreOptions ? 'bg-black text-white' : 'bg-white hover:bg-black hover:text-white'
          }`}
        >
          Show More
        </button>

        {/* More options */}
      </div>
      {showMoreOptions && (
          <div className=' ml-32 mt-3 flex gap-3 text-[17px] font-medium'>
            <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
              Music
            </button>
            <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
              Entertainment
            </button>
            <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
              Sports
            </button>
            <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
              Food
            </button>
            <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
              Gaming
            </button>
            <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
              Business & Finance
            </button>
            
            
          </div>
        )}

{showMoreOptions && (
          <div className=' ml-32 mt-3 flex gap-3 text-[17px] font-medium'>
            <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black'
            >Arts & culture</button>
            
            <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
              Travel
            </button>
            <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
              Science
            </button>
            <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
              Anime & comics
            </button>
            <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
              Technology
            </button>
            <button className='border border-black text-black hover:text-white rounded-lg px-4 py-1 bg-white hover:bg-black '>
              Fitness
            </button>

          </div>
)}
    </div>
  );
}

export default InterestsSwitch;
