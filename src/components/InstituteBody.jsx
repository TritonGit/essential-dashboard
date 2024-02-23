import React from 'react';

function InstituteBody() {
  // Function to handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Do something with the selected file, e.g., save it to state
    console.log('Selected File:', selectedFile);
  };

  return (
    <div className=' w-max h-72 mt-2'>
      <div className='w-[90%] h-auto ml-20 mt-4 bg-gray-50 rounded-lg px-6 py-5'>
        <form>
          <h3 className='font-medium'>Upload your Institution page image</h3>
          {/* File input */}
          <input
            type='file'
            accept='image/*'  // Specify accepted file types (images in this case)
            onChange={handleFileChange}
            className='mt-2'
          />

          <h3 className='font-medium mt-7'>Enter the page title</h3>
          <input
            className='px-2 py-1 mt-2 rounded-md border border-gray-300'
            type='text'
            placeholder='Your College Name'
          />

          <h3 className='font-medium mt-8'>Write the page description</h3>
          
          <input
            className='border border-gray-300 px-4 mt-2 w-[95%] h-[150px] pl-5 pb-[100px] rounded-md'
            type='text'
            placeholder='Type here..'
          />

            <input
            className=' font-medium w-auto h-auto bg-black text-white text-lg  px-8 py-2 rounded-md mt-14 mb-4 ml-[1200px]'
            type='submit'
            />

        </form>
      </div>
        {/* here ends the submit page (half page done) */}

        <div className=' w-screen h-auto mt-16 py-16'>
            <div className=' ml-16 flex justify-between mr-16'>
                <h1 className=' font-medium'>All Posts</h1>
                <button className='  font-medium border border-gray-400 border-dashed px-4 rounded-md'> + Add New Post</button>
            </div>
            
            {/* Multiple images */}
            <div className=' flex gap-8 mt-12 ml-20 mr-10'>
                <div className='w-[350px] h-[450px] rounded-xl bg-gray-300'></div>
                <div className='w-[350px] h-[450px] rounded-xl bg-gray-300'></div>
                <div className='w-[350px] h-[450px] rounded-xl bg-gray-300'></div>
                <div className='w-[350px] h-[450px] rounded-xl bg-gray-300'></div>
                
            </div>
        </div>

    </div>
  );
}

export default InstituteBody;
