import React from 'react';
import SwiggyImg from "../../assets/swiggy.png";

const Footer = () => {
    return (
        // Footer container with padding, shadow, background color, and text color
        <div className="p-[10px]  shadow-xl bg-black text-white left-0 w-full mt-20">
            {/* Container for maximum width and centering */}
            <div className='max-w-[1400px] mx-auto flex flex-col  left-0'>
                {/* Swiggy logo */}
                <div className='w-[120px] mr-2'>
                    <img src={SwiggyImg} className='w-full' alt="Swiggy Logo" />
                </div>
                {/* Copyright text */}
                <div className="mt-2 ml-4">© 2023 Bundl Technologies Pvt Ltd</div>
            </div>
        </div>
    );
};

export default Footer;
