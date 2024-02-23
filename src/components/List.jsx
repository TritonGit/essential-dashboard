import React from 'react'
import Rectangle1 from '../assets/Rectangle.png';

function List() {
  return (
    <div className='shadow-lg w-[95%] h-72 ml-8 bg-white rounded-lg text-black mt-5'>

        {/* Image section of the box */}
        <div className='relative '>
          <img className='px-4 py-8' src={Rectangle1} alt='Rectangle1' />
          <div className=' absolute text-white ml-[280px] mt-[-70px] bg-black px-3 py-1 rounded-xl opacity-60'>
            Category
          </div>
        </div>

        {/* Remove and heading section of the box */}
        <div className=' flex justify-between w-[63%] ml-auto mr-8 mt-[-245px] text-black h-10 '>
          <h1 className='text-xl font-bold'>Heading</h1>
          <button className=' absolute ml-[680px] w-auto h-[30px] px-2 py-1 text-center text-red-500 border border-dashed border-red-700 rounded'>
            Remove
          </button>
        </div>


          {/* paragraph section of the box */}
          <div className='w-auto h-auto ml-[400px] mt-2 '>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente inventore aliquam quisquam repudiandae quia deserunt ullam quo, consectetur quibusdam aspernatur! Doloremque id dolore neque, sunt et, mollitia tenetur dolorem beatae ullam amet repellendus quidem! Non inventore quo expedita, tenetur commodi laudantium in obcaecati soluta aspernatur omnis adipisci saepe magni ea harum ducimus blanditiis totam est eaque. Maxime ea quidem repellendus consequatur, impedit asperiores sunt labore dolorum iste ullam ipsa unde explicabo architecto ex sequi. Velit minima ipsam nulla rem eligendi.  </p>  
          </div>

      </div>
  )
}

export default List
