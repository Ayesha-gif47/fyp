import React from 'react'
import { LayoutDashboard, Pencil, LogOut } from "lucide-react";

const SlideBar = ({ setCurrentView }) => {
  return (
    <div className=''>
       <div className="w-64 bg-gray-50 text-black h-[89%] p-6 space-y-6 mt-[4.5rem]">
      <button
        onClick={() => setCurrentView("dashboard")}
        className="flex items-center gap-2 hover:text-[#840000]"
      >
        <LayoutDashboard size={20} /> Dashboard
      </button>
      <button
        onClick={() => setCurrentView("update")}
        className="flex items-center gap-2 hover:text-[#840000]"
      >
        <Pencil size={20} /> Update Profile
      </button>
      <button className="flex items-center gap-2 hover:text-[#840000]">
        <a href='/' className='flex gap-2'><LogOut size={20}/>Logout</a>
      </button>
    </div>
    </div>
  )
}

export default SlideBar
