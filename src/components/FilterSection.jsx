import React, { useState } from "react";

const FilterSection = ({ setSelectedArea, onSortChange }) => {
 const [sortBy, setSortBy] = useState("");
 const [selectedLocation, setSelectedLocation] = useState("");
 const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility
 const [isPureVegSelected, setIsPureVegSelected] = useState(false); // State to track if Pure Veg option is selected


 const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
    setSelectedLocation(""); // Reset the selected location when changing the area
    setIsDropdownOpen(false); // Close the dropdown after selection
 };

 const handleLocationChange = (location) => {
    setSelectedLocation(location);
 };

 const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    onSortChange(sortOption);
 };

 const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
 };

 const handlePureVegToggle = () => {
    setIsPureVegSelected(!isPureVegSelected);
    setPureVegSelected(!isPureVegSelected); // Pass the inverse of the current state to the parent component
 };

 return (
    <div className="max-w-[1200px] mb-5 mx-auto flex flex-wrap gap-3 justify-center xl:justify-start">
      <div className="relative">
        <button
          className="p-3 shadow rounded-full w-full xl:w-auto cursor-pointer"
          onClick={toggleDropdown}
        >
          Filter by Area
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-full bg-white shadow rounded-md z-10" >
            <div className="p-2">
              <div className="flex items-center">
                <input
                 type="radio"
                 id="area-canadian"
                 name="area"
                 value="Canadian"
                 onChange={handleAreaChange}
                />
                <label htmlFor="area-canadian" className="ml-2">Canadian</label>
              </div>
              <div className="flex items-center">
                <input
                 type="radio"
                 id="area-spanish"
                 name="area"
                 value="Spanish"
                 onChange={handleAreaChange}
                />
                <label htmlFor="area-spanish" className="ml-2">Spanish</label>
              </div>
              <div className="flex items-center">
                <input
                 type="radio"
                 id="area-Chinese"
                 name="area"
                 value="Chinese"
                 onChange={handleAreaChange}
                />
                <label htmlFor="area-Chinese" className="ml-2">Chinese</label>
              </div>
              <div className="flex items-center">
                <input
                 type="radio"
                 id="area-French"
                 name="area"
                 value="French"
                 onChange={handleAreaChange}
                />
                <label htmlFor="area-French" className="ml-2">French</label>
              </div>
              <div className="flex items-center">
                <input
                 type="radio"
                 id="area-Italian"
                 name="area"
                 value="Italian"
                 onChange={handleAreaChange}
                />
                <label htmlFor="area-Italian" className="ml-2">Italian</label>
              </div>
              <div className="flex items-center">
                <input
                 type="radio"
                 id="area-American"
                 name="area"
                 value="American"
                 onChange={handleAreaChange}
                />
                <label htmlFor="area-American" className="ml-2">American</label>
              </div>
              <div className="flex items-center">
                <input
                 type="radio"
                 id="area-Mexican"
                 name="area"
                 value="Mexican"
                 onChange={handleAreaChange}
                />
                <label htmlFor="area-Mexican" className="ml-2">Mexican</label>
              </div>
              <div className="flex items-center">
                <input
                 type="radio"
                 id="area-Indian"
                 name="area"
                 value="Indian"
                 onChange={handleAreaChange}
                />
                <label htmlFor="area-Indian" className="ml-2">Indian</label>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-3 shadow rounded-full border cursor-pointer" onClick={() => handleSortChange('alphabetical')}>Sort By</div>
      <div className='p-3 shadow rounded-full border cursor-pointer'>Fast Delivery</div>
      <div className='p-3 shadow rounded-full border cursor-pointer'>New on Swiggy</div>
      <div className='p-3 shadow rounded-full border cursor-pointer'>Ratings 4.0+</div>
      <div
        className={`p-3 shadow rounded-full border cursor-pointer ${
          isPureVegSelected ? "bg-green-500 text-white" : ""
        }`}
        onClick={handlePureVegToggle}
      >
        Pure Veg
      </div>
      <div className='p-3 shadow rounded-full border cursor-pointer'>Offers</div>
      <div className='p-3 shadow rounded-full border cursor-pointer'>Rs. 300-Rs. 600</div>
      <div className='p-3 shadow rounded-full border cursor-pointer'>Less than Rs. 300</div>
    </div>
 );
};


    const Setting = () => {
        return (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="none"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.4 5.999a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm1.6 0a2.8 2.8 0 0 1-5.485.8H1.81a.8.8 0 1 1 
                0-1.6h7.707a2.801 2.801 0 0 1 5.484.8ZM3.8 13.453a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm0 1.6a2.8 2.8 0 1 
                1 2.684-3.6h7.711a.8.8 0 1 1 0 1.6h-7.71a2.801 2.801 0 0 1-2.685 2Z"
                fill="#000"
                fillOpacity=".92"
            ></path>
            </svg>
        );
    };

    export default FilterSection;



