import React from 'react'
import { useSelector } from 'react-redux';
export default function Profile() {
  const {currentUser} = useSelector((state)=> state.user)
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-8">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="rounded-full h-24 w24 object-cover cursor-pointer self-center mt-2"
          src={currentUser.avatar}
          alt="profile"
        />
        <input
          type="text"
          id="username"
          placeholder="username"
          className="border p-3 rounded-lg outline-none"
        />
        <input
          type="email"
          id="email"
          placeholder="username"
          className="border p-3 rounded-lg outline-none"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="border p-3 rounded-lg outline-none"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className='flex justify-between mt-4'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700'>Sign Out</span>
      </div>
    </div>
  );
}
