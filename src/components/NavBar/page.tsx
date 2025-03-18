'use client';
import { RemoveSignData } from "@/lib/useraction";
import { FirstAction } from "@/Redux/action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const rounter=useRouter()

  const RemoveSignInInfo=()=>{
    const EraseData=RemoveSignData()
    rounter.push("/sign-in")
  }

  return (
    <div className="flex justify-between items-center  bg-gray-700 text-white shadow-md relative">
      
      <div className="flex items-center gap-4 m-2">
        <button
          onClick={() => dispatch(FirstAction())}
          className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
       
        <a className="text-2xl font-semibold tracking-wider hover:text-gray-300">
          ARS Algo Trading
        </a>
        <input type="checkbox" className="toggle toggle-success bg-gray-300" />

      </div>

      
     

      {/* Right: User Avatar & Notifications */}
      <div className="flex items-center gap-4">
        
        {/* Notification Button */}
        <button className="relative p-2 rounded-full hover:bg-gray-700 focus:outline-none">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        {/* User Avatar */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative p-2 rounded-full hover:bg-gray-700 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User Avatar"
              className="object-cover"
            />
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-14 right-0 bg-gray-700 text-white rounded-lg shadow-md p-2 w-48">
              <a className="block px-4 py-2 hover:bg-gray-600 rounded">Profile</a>
              <a className="block px-4 py-2 hover:bg-gray-600 rounded">Settings</a>
              <a className="block px-4 py-2 hover:bg-gray-600 rounded" onClick={RemoveSignInInfo}>Logout</a>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
