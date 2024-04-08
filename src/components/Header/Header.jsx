import React from 'react';
import SwiggyImg from "../../assets/swiggy.png";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        // Header container with padding, shadow, sticky positioning, and z-index
        <div className="p-[10px] shadow-xl sticky top-0 z-10 bg-white">
            {/* Container for maximum width and centering */}
            <div className='max-w-[1400px] mx-auto flex justify-between items-center' >
                {/* Swiggy logo */}
                <div className='w-[120px]'>
                    <img src={SwiggyImg} className='w-full' alt="Swiggy Logo" />
                </div>
                {/* Search input field */}
                <div className='relative flex items-center'>
                    <input placeholder='Search for restaurant and food' className='bg-gray-200 border-r-4 rounded-lg w-[310px] p-1 pr-[40px] ' />
                    {/* Search button */}
                    <button className="absolute right-0 top-0 bottom-0 bg-transparent border-none mr-[10px]">
                        {/* Search icon */}
                        <FaSearch className='text-gray-500'/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
