import React from 'react'
import essential from '../assets/essential.png'
const login = () => {
  return (
    <div className="min-h-screen min-w-full flex items-center justify-center bg-white">
      <img className =" absolute mt-[-320px] ml-[22px] size-100"src={essential}/>
      
    <div className=" p-8 rounded w-96">
      <form>
        <div className="mb-4 ">
          <label htmlFor="userId" className="block text-gray-700 text-sm font-medium mb-3">
            User ID
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            className="border rounded-md border-gray-300 p-2 w-full text-left placeholder-center"
            placeholder="Enter your user ID"
            style={{ textIndent: '10px' }}
            
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-3">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded-md border-gray-300 p-2 w-full text-left placeholder-center"
            placeholder="Enter your password"
            style={{ textIndent: '10px' }}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-600 transition-all duration-200"
        >
          Log In
        </button>
        <div className=" mt-[-55px] ml-[200px] text-sm  text-blue-400">
        <a href="/forgot-password">Forgot Password?</a>
        </div>
      </form>
    </div>
  </div>
  )
}

export default login
