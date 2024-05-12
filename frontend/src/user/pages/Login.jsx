import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="common-home-bac mt-[80px] ">
    <div className="flex justify-center items-center h-screen -top-24 ">
      <div className="bg-blue-700 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl text-white font-bold text-center mb-4">
          PSM Login
        </h2>
        <form className="space-y-8">
          <div>
            <label className="block text-white py-2">Email</label>
            <input
              type="text"
              id="username"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white py-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <Link to="/dashboard" className="relative">
          <button
          
            type="submit"
            className="w-full bg-blue-900 text-white rounded-md mt-4 hover:text-blue-900 py-2 hover:bg-blue-50 transition duration-300"
          >
            Login
          </button>
          </Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login
